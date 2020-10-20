import { bookRoute } from './app/routes/bookRoute';
import * as express from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import {connect} from './app/utils/util';
import authRoutes from './app/routes/authRoutes'
import { environment } from './environments/environment'
import passportConfig from './app/utils/passport'
import multer from 'multer'
const app = express();

//==============================================================================================

//Database connect
const mongodbUrl:string = environment.MONGODB_URL;
connect(mongodbUrl)

//==============================================================================================

//Middleware..
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//==============================================================================================

// Passport middleware
passportConfig(app)

//==============================================================================================

// Load all Routes..
authRoutes(app)
bookRoute(app)

//==============================================================================================
// Page not found for other urls
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Error !!! 404 not found',
  });  
});
//==============================================================================================
// Server
const port = environment.PORT;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});

//==============================================================================================