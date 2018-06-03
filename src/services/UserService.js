class UserService {
  constructor(User) {
    this.User = User;
    this.getUser = this.getUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
  }

  async getUser(username, password) {
    return {};
  }

  async getUserById(userId) {
    return {};
  }
}

module.exports = UserService;
