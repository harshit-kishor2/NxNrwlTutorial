import * as express from 'express';
//import userRoute from './app/routes/userRoutes';
import guestRoutes from './app/routes/guestRoutes';
import authRoutes from './app/routes/authRoutes'
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import {connect} from './app/utils/util';
import passport from 'passport'
import { environment } from './environments/environment'
const app: express.Application = express();

//Database connect
const mongodbUrl:string = environment.MONGODB_URL;
connect(mongodbUrl)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./app/utils/passport') 
//Middleware..
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load all Routes..
app.use('/api', guestRoutes);
app.use('/auth', authRoutes);
//app.use('/api/user', userRoute);

// Page not found for other urls
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Error !!! 404 not found',
  });
  
});
// Server
const port = environment.PORT;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
