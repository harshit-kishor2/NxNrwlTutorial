import * as express from 'express'
import { Router } from 'express'
import passport from 'passport'
const router:Router = express.Router();
import {
  homeController,
  registerController,
  loginController,
} from './../controller/guestController';
router.get('/', homeController);
router.post('/register', registerController);
router.post('/login', loginController);
export default router;
