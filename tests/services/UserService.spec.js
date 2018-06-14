const UserService = require("../../src/services/UserService");

describe("UserService spec", () => {
  it("has a service", () => {
    expect(UserService).toBeDefined();
  });

  describe("UserService.getUser", () => {
    it("gets a user", () => {
      const UserModel = {
        findOne: jest.fn()
      };
      const service = new UserService(UserModel);
      const username = "foo";
      const password = "bar";
      service.getUser(username, password);
      expect(UserModel.findOne).toBeCalledWith({ username, password });
    });
  });

  describe("UserService.getUserById", () => {
    it("gets a user", () => {
      const UserModel = {
        findById: jest.fn()
      };
      const service = new UserService(UserModel);
      const userId = "foo";
      service.getUserById(userId);
      expect(UserModel.findById).toBeCalledWith(userId);
    });
  });

  describe("UserService.saveUser", () => {
    it("adds a todo", () => {
      const UserModel = {};
      const service = new UserService(UserModel);
      const user = {
        save: jest.fn()
      };
      const returned = service.saveUser(user);
      expect(user.save).toHaveBeenCalled();
      expect(returned).toEqual(Promise.resolve({}));
    });
  });
});
