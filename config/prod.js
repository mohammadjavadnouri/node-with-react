//dev.js  production keys - DO COMMIT this :)
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoDBConnectionString: process.env.MONGO_DB_CONNECTION_STRING,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  nodeMailerEmailPassKey: process.env.NODE_MAILER_EMAIL_PASS_KEY,
};
