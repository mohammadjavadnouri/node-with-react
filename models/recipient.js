const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  //commented because of not using sendGrid (SMTP server)
  // responded: { type: Boolean, default: false },
});

module.exports = recipientSchema;
