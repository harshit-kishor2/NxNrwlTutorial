import  cookieSession from 'cookie-session';
import  bcrypt  from 'bcryptjs';
import passport from 'passport'
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");
import {environment} from '../../environments/environment'

const passportConfig = (app) => {  

  /* 
    This middlewares is required to make passport work with sessions and cookie
    sessions are optional,  an easy solution to keeping users
    logged in until they log out.
  */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,   // the duration in milliseconds that the cookie is valid
    keys: [environment.COOKIE_SECRET],
  })
);
/*
   Only necessary when using sessions.
   This tells Passport how or what data to save about a user in the session cookie.
   It's recommended you only serialize something like a unique username or user ID.
   I prefer user ID. 
*/
passport.serializeUser((user, done) => {
  done(null, user.id);
  //here id taken from database id
});

/*
    Only necessary when using sessions.
    This tells Passport how to turn the user ID we serialize in the session cookie
    back into the actual User record from our Mongo database.
    Here, we simply find the user with the matching ID and return that.
    This will cause the User record to be available on each authenticated request via the req.user property.
*/
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      console.log(err);
    });
});


//Google Strategy
passport.use(
    new GoogleStrategy({
      clientID: environment.GOOGLE_CLIENT_ID,
      clientSecret: environment.GOOGLE_SECRET_KEY,
      callbackURL: "/auth/google/callback",
      proxy: true,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
        const existingUser = await User.findOne({
        googleId: profile.id,
      })
      if (existingUser) {   
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName,
        }).save();
        return done(null, user);
      }
        }
        catch(error) {
          done(error)
        }
    }
    )   
);
 
//Local strategy
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (username, password, done) => {
    User.findOne({ email:username}, (err, user) => {
      try {
        if (err) { return done(err); }
        if (!user) {
        return done(null, false, { email: `Email ${username} not found`  });
        }
        else {
          bcrypt.compare(password, user.password)
            .then(isMatch => {
              if (isMatch) {
                 return done(null, user);
             }
              else {                
               return done(null, false, { password:"Invalid email or password"  });
             }
          })
        }        
      } catch (error) {
         done(error)
      }
    });
  }
));

//facebook strategy

passport.use(
    new FacebookStrategy({
      clientID: environment.FACEBOOK_CLIENT_ID,
      clientSecret: environment.FACEBOOK_SECRET_KEY,
      callbackURL: "/auth/facebook/callback",
      proxy: true,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
        const existingUser = await User.findOne({
        facebookId: profile.id,
      })
      if (existingUser) {   
        done(null, existingUser);
      } else {
        const user = await new User({
          facebookId: profile.id,
          name:profile.displayName
        }).save();
        return done(null, user);
          }         
        }
        catch(error) {
          done(error)
        }
    }
    )   
);
 
  // initialize passport. this is required, after you set up passport but BEFORE you use passport.session (if using)
  app.use(passport.initialize());
  // only required if using sessions. this will add middleware from passport
  // that will serialize/deserialize the user from the session cookie and add
  // them to req.user
  app.use(passport.session());

}

export default passportConfig