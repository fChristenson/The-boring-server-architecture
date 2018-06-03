const router = require("express").Router();
const { userService } = require("../services");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.getUser(username, password);

  if (user) {
    req.session.userId = user.id;
    res.redirect("/todos");
  } else {
    res.status(401).end("invalid credentials");
  }
});

module.exports = router;
