const mongoose = require("mongoose");
const { User } = require("../../src/models");

describe("UserModel spec", () => {
  beforeAll(async () => {
    db = await mongoose.connect("mongodb://localhost:27017/test");
  });

  afterAll(async () => {
    await db.close();
  });

  beforeEach(async () => {
    await User.remove({});
  });

  it("correctly serialises the model", async () => {
    const username = "username";
    const password = "password";
    const user = new User({ username, password });
    await user.save();
    const userInDatabase = await User.findById(user.id);
    const expected = {
      _id: user.id,
      username: "username",
      password: "password",
      __v: 0
    };
    const expectedString = JSON.stringify(expected);
    const actual = JSON.stringify(userInDatabase);
    expect(expectedString).toEqual(actual);
  });
});
