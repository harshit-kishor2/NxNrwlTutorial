import  jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import {environment} from '../../environments/environment'
 const connect = (db: string) => {
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
const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,

  }, environment.JWT_SECRET, {
    expiresIn: '48h'
  })
}

const isAuth = (req, res, next) => {
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

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: 'Admin Token is not valid.' })
}


  export {connect,getToken,isAuth,isAdmin}