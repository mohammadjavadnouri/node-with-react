//keys.js  figure out what set of credentials to return

if (process.env.NODE_ENV === "dev") {
  module.exports = require("./dev");
} else {
  module.exports = require("./prod");
}
