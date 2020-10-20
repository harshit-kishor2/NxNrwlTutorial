import passport from 'passport'
import {
  currentUserController,
  forgotController,
  logoutController,
  registerController,
  resetController
} from '../controller/authController';


const authRoutes = (app) => {
  
  //for registration
  app.post('/api/register', registerController);
  
//========================================================================================================
  //For google Login
  app.get("/auth/google",passport.authenticate("google", { scope: ["profile", "email"] }));
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google",{successRedirect: '/',failureRedirect: '/login'}),
  );

//========================================================================================================
  //for facebook login
 app.get('/auth/facebook', passport.authenticate('facebook'));

 app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
   (req, res)=> {
    res.redirect('/');
  });

//========================================================================================================  
  //for local login via username and password
  app.post('/api/login',
    (req, res, next) => {
      passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err) }
        if (!user) {
          return res.status(400).send({ path: "/login", msg: info })
        }
        req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send({path:"/",msg:user});
    });
      })
      (req,res,next)
     });

//========================================================================================================
  //for current user data located in cookie
app.get("/api/current_user",currentUserController);

//========================================================================================================
  // for logout user
app.get("/api/logout", logoutController);

//========================================================================================================

app.put("/api/forgot-password",forgotController)
//========================================================================================================

  app.put("/api/reset-password",resetController)
//========================================================================================================

  
}
export default authRoutes