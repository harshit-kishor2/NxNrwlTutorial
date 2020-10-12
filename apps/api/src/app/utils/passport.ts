import { Strategy as JwtStrategy,ExtractJwt } from 'passport-jwt'
import User from '../models/userModel'
import {environment} from '../../environments/environment'
const opts:any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = environment.JWT_SECRET;
const psprt = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
export default psprt