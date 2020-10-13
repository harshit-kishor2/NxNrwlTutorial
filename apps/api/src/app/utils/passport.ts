const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");
import jwt from 'jsonwebtoken'
import {environment} from '../../environments/environment'
import passport from 'passport'
  passport.use(
    new GoogleStrategy({
      clientID: environment.GOOGLE_CLIENT_ID,
      clientSecret: environment.GOOGLE_SECRET_KEY,
      callbackURL: "http://localhost:4200/auth/google/callback",
      proxy: true,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
        const existingUser = await User.findOne({
        googleId: profile.id,
      })
      if (existingUser) {
        console.log("Already saved in database...");
         const token = jwt.sign(existingUser.toJSON(), environment.JWT_SECRET, { expiresIn: '1h' }); //generating token
       const redirect_url = `http://localhost:4200/${token}`
      return  done(null, redirect_url);
      } else {
        console.log("Data saved in database...");
        const user = await new User({
          googleId: profile.id,
        }).save();
        const token = jwt.sign(user.toJSON(), environment.JWT_SECRET, { expiresIn: '1h' }); //generating token
       const redirect_url = `http://localhost:4200/${token}`
        return done(null, redirect_url);
      }
        }
        catch(error) {
          done(error)
        }
    }
    )   
  );
