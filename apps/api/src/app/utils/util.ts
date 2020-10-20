import  jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import {environment} from '../../environments/environment'

//========================================================================================================
export const connect = (db: string) => {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
       useUnifiedTopology: true,})
      .then(() => {
        return console.log(`Database Successfully connected`);
      })
      .catch(error => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
};

//========================================================================================================
export const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,

  }, environment.JWT_SECRET, {
    expiresIn: '48h'
  })
}


//========================================================================================================
export const passwordToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  }, environment.JWT_SECRET, {
    expiresIn: '10m'
  })
}


//========================================================================================================
export const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, environment.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: 'Invalid Token' });
      }
      req.user = decode;
      next();
      return
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied." });
  }
}

//========================================================================================================

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: 'You are not authorized' })
}

//========================================================================================================

export const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(404).send({ msg: "You must log in" });
  }
  next();
};

//========================================================================================================