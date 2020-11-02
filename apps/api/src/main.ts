import { bookRoute } from './app/routes/bookRoute';
import * as express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import * as bodyParser from 'body-parser';
import {connect} from './app/utils/util';
import authRoutes from './app/routes/authRoutes'
import { environment } from './environments/environment'
import passportConfig from './app/utils/passport'
import { issueBookRoute } from './app/routes/issueBookRoute';
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
app.use(cors())
//==============================================================================================

// Passport middleware
passportConfig(app)

//==============================================================================================

// Load all Routes..
authRoutes(app)
bookRoute(app)
issueBookRoute(app)
//==============================================================================================
// Page not found for other urls
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Error !!! 404 not found',
  });  
});

//==============================================================================================
if (environment.production) {
  app.use(express.static("dist/apps/frontend"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist","apps","frontend", "index.html"));
  });
}
//==============================================================================================
// Server
const port = environment.PORT;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});

//==============================================================================================
