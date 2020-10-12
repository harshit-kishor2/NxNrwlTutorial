const express = require('express');
const router = express.Router();
import {
  homeController,
  errorController,
  registerController,
} from './../controller/userController';

router.get('/', homeController);
router.post('/register', registerController);
export default router;
