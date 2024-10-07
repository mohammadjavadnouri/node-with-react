const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./models/user");
require("./services/passport");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const billingRoutes = require("./routes/billing");
const keys = require("./config/keys");

mongoose.connect(keys.mongoDBConnectionString);

const app = express();

app.use(bodyParser.json());

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

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
app.use("/api/stripe", billingRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirnamem, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening on port: (${PORT})`);
});
