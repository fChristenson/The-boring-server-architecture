const router = require("express").Router();
const User = require("../models/UserModel");
const { userService } = require("../services");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.getUser(username, password);

  if (user && user.id) {
    req.session.userId = user.id;
    res.redirect("/todos");
  } else {
    res.status(401).end("invalid credentials");
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  const savedUser = await userService.saveUser(user);
  req.session.userId = savedUser.id;
  res.redirect("/todos");
});

module.exports = router;
