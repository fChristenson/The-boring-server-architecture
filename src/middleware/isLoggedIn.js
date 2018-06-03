const isLoggedIn = (req, res, next) => {
  if (req.session.userId) next();

  res.redirect("/");
};

module.exports = isLoggedIn;
