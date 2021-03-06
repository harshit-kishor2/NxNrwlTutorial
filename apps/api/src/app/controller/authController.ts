import bcrypt from 'bcryptjs'
import passport from 'passport'
import {Request,RequestHandler,Response} from 'express'
//Load Validation
//import validateLoginInput from '../middleware/validation/loginValidation';
import  validateRegisterInput from '../middleware/validation/registerValidation';
// Load Model
import User from '../models/userModel'
import { getToken } from '../utils/util';

//RegisterController for Post request
   /*1st Check validation 
    find user
    Check email duplication
    Hash password before saving in database
    save userdata
    return response
   */
const registerController:RequestHandler = (req:Request, res:Response) => {
const {errors,isValid}=validateRegisterInput(req.body)
   if (!isValid) {
  return res.status(400).json(errors);
  }  
  const { name, email, password } = req.body;
  User.findOne({email})
    .then(user => {
      if (user) {
      return res.status(400).json({email: "Email already exists" });
      }
      else {
        var newUser = new User({
        name,
        email,
        password
      })
      }     
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash;
          newUser.save()
            .then(newUser => res.send({
              _id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              isAdmin: newUser.isAdmin,
              token: getToken(newUser)
            }))
          .catch(err => console.log(err))
        })
      })
  })
};

//LoginController  for Post request
/* 
   Check Validation
   find user by email
   check if user exists
   check password match from database
*/
/*
//Login controller by username and password 
 const loginController:RequestHandler = (req:Request, res:Response) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
   }
   const { email, password } = req.body
   User.findOne({ email })
     .then(user => {
       if (!user) {
         return res.status(400).send({ email: "Email not found" });
       }
       else {
         bcrypt.compare(password, user.password)
           .then(isMatch => {
             if (isMatch) {
               res.send({
                 status:200,
                 _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: getToken(user)
              });
             }
             else {
               return res.status(400).send({password: "Password incorrect" });
             }
         })
       }
   })

};
*/


const currentUserController = (req, res) => {
  res.send(req.user);
}

const logoutController = (req, res) => {
  req.logout();
  res.redirect("/");
}
export {registerController,currentUserController,logoutController}