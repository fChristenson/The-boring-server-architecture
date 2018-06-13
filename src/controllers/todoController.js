const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Todo = require("../models/TodoModel");
const { todoService, userService } = require("../services");

router.get("/todos", isLoggedIn, async (req, res) => {
  const todos = await todoService.listTodos();
  res.render("todo", { todos });
});

router.post("/todos", isLoggedIn, async (req, res) => {
  const { todo } = req.body;
  const user = await userService.getUserById(req.session.userId);
  const newTodo = new Todo({ todo, user });
  await todoService.addTodo(newTodo);
  res.redirect("/todos");
});

module.exports = router;
