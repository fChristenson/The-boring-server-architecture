const app = require("../../src");
const request = require("supertest");
const mongoose = require("mongoose");
const { Todo, User } = require("../../src/models");

describe("TodoController spec", () => {
  beforeAll(async () => {
    db = await mongoose.connect("mongodb://localhost:27017/test");
  });

  afterAll(async () => {
    await db.close();
  });

  beforeEach(async () => {
    await Todo.remove({});
    await User.remove({});
  });

  it("returns 404", async () => {
    await request(app).get("/notfound").expect(404);
  });

  it("returns 302 for /todos if there is no session", async () => {
    await request(app).get("/todos").expect(302);
  });

  it("returns 302 for /todos if there is no session", async () => {
    await request(app).post("/todos").send({ todo: "foo" }).expect(302);
  });
});
