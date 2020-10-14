import * as express from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import {connect} from './app/utils/util';
import passport from 'passport'
import authRoutes from './app/routes/authRoutes'
import { environment } from './environments/environment'
import cookieSession from 'cookie-session';
import passportConfig from './app/utils/passport'

const app: express.Application = express();

//Database connect
const mongodbUrl:string = environment.MONGODB_URL;
connect(mongodbUrl)

//Middleware..
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
//Session with 30 days
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [environment.COOKIE_SECRET],
  })
);
*/
// Passport middleware
//app.use(passport.initialize());
//app.use(passport.session());    //// calls serializeUser and deserializeUser
passportConfig(app)
// Load all Routes..
authRoutes(app)
//app.use('/api', guestRoutes);
//app.use('/api/user', userRoute);

// Page not found for other urls
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Error !!! 404 not found',
  });  
});

// Server
const port = environment.PORT;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
