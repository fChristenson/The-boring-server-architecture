const TodoService = require("../../src/services/TodoService");

describe("TodoService spec", () => {
  it("has a service", () => {
    expect(TodoService).toBeDefined();
  });

  describe("TodoService.listTodos", () => {
    it("lists all todos", () => {
      const TodoModel = {
        find: jest.fn()
      };
      const service = new TodoService(TodoModel);
      service.listTodos();
      expect(TodoModel.find).toBeCalledWith({});
    });
  });

  describe("TodoService.addTodo", () => {
    it("adds a todo", () => {
      const TodoModel = {};
      const service = new TodoService(TodoModel);
      const todo = {
        save: jest.fn()
      };
      const returned = service.addTodo(todo);
      expect(todo.save).toHaveBeenCalled();
      expect(returned).toEqual(Promise.resolve({}));
    });
  });
});
