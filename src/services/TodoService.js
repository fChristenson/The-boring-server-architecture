class TodoService {
  constructor(Todo) {
    this.Todo = Todo;
    this.listTodos = this.listTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  async listTodos() {
    return this.Todo.find({});
  }

  async addTodo(todo) {
    await todo.save();
    return todo;
  }
}

module.exports = TodoService;
