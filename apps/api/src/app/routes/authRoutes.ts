import * as express from 'express'
import { Router } from 'express'
import passport from 'passport'
const router: Router = express.Router();
router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }))
 router.get("/google/callback",
    passport.authenticate("google",{ session: false, failureRedirect: `https://localhost:4200/login`}),
    (req, res) => {
      res.redirect("/");
    }
);

export default router;