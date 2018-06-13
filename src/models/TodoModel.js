const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
  todo: String,
  user: Object
});

module.exports = mongoose.model("Todo", Todo);
