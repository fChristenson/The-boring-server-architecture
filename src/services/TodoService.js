class TodoService {
  constructor(userService) {
    this.userService = userService;
    this.listTodos = this.listTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  async listTodos() {
    return [{ todo: "foo", user: { name: "foobar" } }];
  }

  async addTodo(todo, userId) {
    const user = await this.userService.getUserById(userId);
    return this._saveTodo(todo, user);
  }

  async _saveTodo(todo, user) {
    return {};
  }
}

module.exports = TodoService;
