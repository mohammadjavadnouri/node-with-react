const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/user");
require("./services/passport");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const keys = require("./config/keys");

console.log("checkkkkkk node env : ", process.env.NODE_ENV === "production");
console.log(" node env : ", process.env.NODE_ENV);
console.log(" node env length: ", process.env.NODE_ENV.length);
console.log(" node env type: ", typeof process.env.NODE_ENV);

mongoose.connect(keys.mongoDBConnectionString);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening on port: (${PORT})`);
});
