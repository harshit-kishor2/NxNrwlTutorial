import dotenv from 'dotenv'
dotenv.config();
export const environment= {
  production: true,
  PORT:process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  COOKIE_SECRET:process.env.COOKIE_SECRET,
  GOOGLE_SECRET_KEY:process.env.GOOGLE_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
  FACEBOOK_SECRET_KEY: process.env.FACEBOOK_SECRET_KEY
};
