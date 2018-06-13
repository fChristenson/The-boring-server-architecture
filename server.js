const app = require("./src");
const mongoose = require("mongoose");

const DB_URI = process.env.MONGO_DB_URI
  ? process.env.MONGO_DB_URI
  : "mongodb://localhost:27017/app";

mongoose.connect(DB_URI);
app.listen(3000);
