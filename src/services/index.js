const TodoService = require("./TodoService");
const UserService = require("./UserService");
const { Todo, User } = require("../models");

const userService = new UserService(User);
const todoService = new TodoService(Todo);

module.exports = {
  todoService,
  userService
};
