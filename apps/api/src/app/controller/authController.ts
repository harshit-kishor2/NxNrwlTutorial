import  jwt  from 'jsonwebtoken';
import { environment } from './../../environments/environment';
import { passwordToken,getToken } from './../utils/util';
import bcrypt from 'bcryptjs'
import {Request,RequestHandler,Response} from 'express'
//Load Validation
//import validateLoginInput from '../middleware/validation/loginValidation';
import  validateRegisterInput from '../middleware/validation/registerValidation';
// Load Model
import User from '../models/userModel'
import _ from 'lodash'
import * as sgMail from '@sendgrid/mail'
sgMail.setApiKey(environment.SENDGRID_KEY);
//========================================================================================================

export const registerController:RequestHandler = (req:Request, res:Response) => {
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

//========================================================================================================

/*
//Login controller by username and password 
 export const loginController:RequestHandler = (req:Request, res:Response) => {
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
//========================================================================================================

export const currentUserController = (req, res) => {
  res.send(req.user);
}

//========================================================================================================
export const logoutController = (req, res) => {
  req.logout();
  res.redirect("/");
}

//========================================================================================================
export const forgotController = (req, res) => {
  const { email } = req.body
  User.findOne({ email })
    .then(user => {
      if (!user) {
      res.status(400).send({email:"User not exist for this email"})
      }
      else {
       const token=passwordToken(user)
        const emailData = {
          from: "harshitkishor2@gmail.com",
          to: email,
          subject: "Password reset link !!!",
          html: `
          <h1>Please click to link to reset password</h1>
          <p>${environment.CLIENT_URL}/reset-password/${token}</p>
          <hr/>
          <p>This email contain sensetive information </p>
          <p>${environment.CLIENT_URL}</p>
          `   
        }
        return user.updateOne({
          resetPasswordLink: token
        }, (err, success) => {
            if (err) {
              console.log(err)
            }
            else {
              sgMail.send(emailData)
                .then(sent => {               
                return res.json({msg:`Email has been sent to : ${email}`})
                })
                .catch(err => {
                 return res.json({msg:err.message})
              })
              
            }
          
        })
      }
  })
}

//========================================================================================================
export const resetController = (req, res) => {
  const { newPassword, resetToken } = req.body
  if (resetToken) {
    jwt.verify(
      resetToken,
      environment.JWT_SECRET,
      (err, decode) => {
        if (err) {
          return res.status(400).send({ msg: "token expired" })
        }
        User.findOne({ resetPasswordLink: resetToken }, (err, user) => {
          if (err || !user) {
            return res.status(400).send({ msg: "Something went wrong ! try again" })
          }
          const updatedField = {
            password:newPassword,
            resetPasswordLink:''
          }
           bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(updatedField.password, salt, (err, hash) => {
          if (err) throw err
          updatedField.password = hash;
          user = _.extend(user, updatedField)
       //   console.log(user)
          user.save((err, result) => {
            if (err) {
              return res.status(400).send({ msg: "Sorry  some error" })
            }
            return res.send({ msg: "Great! Now u can login with new password" })
          })
        })
      })


        })
        
      }
    )
  }
}