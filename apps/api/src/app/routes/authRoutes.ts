import passport from 'passport'
import {
  currentUserController,
  logoutController,
  registerController
} from '../controller/authController';


const authRoutes = (app) => {
  
  //for registration
  app.post('/api/register', registerController);
  
  //For google Login
  app.get("/auth/google",passport.authenticate("google", { scope: ["profile", "email"] }));
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google",{successRedirect: '/',failureRedirect: '/login'}),
  );

  //for facebook login
 app.get('/auth/facebook', passport.authenticate('facebook'));

 app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
   (req, res)=> {
    res.redirect('/');
  });

  //for local login via username and password
  /*app.post('/api/login',
    (req, res, next) => {
      passport.authenticate('local', {
        successRedirect: 'http://localhost:4200', failureRedirect: 'http://localhost:4200/login'
      })
      (req,res,next)
     });*/
  app.post('/api/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  app.get("/login", (req, res) => {
    res.redirect("http://localhost:4200/login")
  })
  //for current user data located in cookie
app.get("/api/current_user",currentUserController);

  // for logout user
app.get("/api/logout", logoutController);
}

export default authRoutes