const app = require("../../src");
const mongoose = require("mongoose");
const request = require("supertest");
const { Todo, User } = require("../../src/models");

describe("HomeController spec", () => {
  let db;

  beforeAll(async () => {
    db = await mongoose.connect("mongodb://localhost:27017/test");
  });

  afterAll(async () => {
    await db.close();
  });

  afterEach(async () => {
    await Todo.remove({});
    await User.remove({});
  });

  it("returns 404", async () => {
    await request(app).get("/notfound").expect(404);
  });

  it("returns 200 for /", async () => {
    await request(app).get("/").expect(200);
  });

  it("returns 401 for /login", async () => {
    await request(app)
      .post("/login")
      .send({ username: "foo", password: "bar" })
      .expect(401);
  });

  it("can register a user on /register", async () => {
    await request(app)
      .post("/register")
      .send({ username: "foo", password: "bar" })
      .expect(302);

    const users = await User.find({});
    const expected = 1;
    const actual = users.length;
    expect(expected).toEqual(actual);
  });

  it("can login", async () => {
    await request(app)
      .post("/register")
      .send({ username: "foo", password: "bar" })
      .expect(302);

    await request(app)
      .post("/login")
      .send({ username: "foo", password: "bar" })
      .expect(302);
  });

  it("returns 200 for /register", async () => {
    await request(app).get("/register").expect(200);
  });
});
