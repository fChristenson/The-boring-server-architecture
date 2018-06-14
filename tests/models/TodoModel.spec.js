const mongoose = require("mongoose");
const { Todo, User } = require("../../src/models");

describe("TodoModel spec", () => {
  beforeAll(async () => {
    db = await mongoose.connect("mongodb://localhost:27017/test");
  });

  afterAll(async () => {
    await db.close();
  });

  beforeEach(async () => {
    await Todo.remove({});
  });

  it("correctly serialises the model", async () => {
    const todo = "todo";
    const username = "username";
    const password = "password";
    const user = new User({ username, password });
    const todoToSave = new Todo({ todo, user });
    await todoToSave.save();
    const todoInDatabase = await Todo.findById(todoToSave.id);
    const expected = {
      _id: todoToSave.id,
      todo: "todo",
      user: {
        _id: user.id,
        username: "username",
        password: "password"
      },
      __v: 0
    };
    const expectedString = JSON.stringify(expected);
    const actual = JSON.stringify(todoInDatabase);
    expect(expectedString).toEqual(actual);
  });
});
