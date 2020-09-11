import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  // agenda: {
  //   dbCollection: process.env.AGENDA_DB_COLLECTION,
  //   pooltime: process.env.AGENDA_POOL_TIME,
  //   concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
  // },
  // agendash: {
  //   user: 'agendash',
  //   password: '123456'
  // },
  api: {
    prefix: '/api',
  },
  // emails: {
  //   apiKey: process.env.MAILGUN_API_KEY,
  //   domain: process.env.MAILGUN_DOMAIN
  // }
};
