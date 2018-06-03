const TodoService = require("./TodoService");
const UserService = require("./UserService");

const userService = new UserService();
const todoService = new TodoService(userService);

module.exports = {
  todoService,
  userService
};
