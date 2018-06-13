const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const { todoController, homeController } = require("./controllers");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(
  session({
    secret: "very secret", // never save the production secret in your repo
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeController, todoController);

module.exports = app;
