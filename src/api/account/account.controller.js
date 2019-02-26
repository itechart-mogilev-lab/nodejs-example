const httpStatus = require("http-status");
const userService = require("./account.service");

module.exports.signin = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.json(user)
        : res
            .status(httpStatus.UNAUTHORIZED)
            .json({ message: "Username or password is incorrect" })
    )
    .catch(err => next(err));
};

module.exports.signout = (req, res, next) => {
  userService.logout(req.body).then(result => {
    result
      ? res.status(httpStatus.OK).json("Ok")
      : res.status(httpStatus.INTERNAL_SERVER_ERROR).json("Internal Error");
  });
};
