const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const { todoService } = require("../services");

router.get("/todos", isLoggedIn, async (req, res) => {
  const todos = await todoService.listTodos();
  res.render("todo", { todos });
});

router.post("/todos", isLoggedIn, async (req, res) => {
  const { todo } = req.body;
  const userId = req.session.userId;
  await todoService.addTodo(todo, userId);
  res.redirect("/todos");
});

module.exports = router;
