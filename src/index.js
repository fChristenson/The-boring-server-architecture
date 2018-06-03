const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const { todoController, homeController } = require("./controllers");
const { todoService, userService } = require("./services");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeController);
app.use("/", todoController);

module.exports = app;
