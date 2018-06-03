const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String
});

module.exports = User;
