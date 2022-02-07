import dotenv from 'dotenv';

dotenv.config();

export default {
  DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
