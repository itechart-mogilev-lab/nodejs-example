const httpStatus = require("http-status");
const userService = require("./account.service");
const Role = require("../../enums/roles.enum");

module.exports.signin = (req, res, next) => {
  userService
    .authenticate(req.body)
    .then(user => {
      user
        ? res.json(user)
        : res
            .status(httpStatus.UNAUTHORIZED)
            .json({ message: "Username or password is incorrect" })
    })
    .catch(err => next(err));
};

module.exports.signout = (req, res, next) => {
  userService.logout(req.body).then(() => {
    res.status(httpStatus.OK).json("Ok");
  });
};

module.exports.registerUser = (req, res, next) => {
  userService
    .register(req.body, Role.User)
    .then(() => {
      res.status(httpStatus.CREATED).json("Created");
    })
    .catch(err => next(err));
};

module.exports.registerAdmin = (req, res, next) => {
  userService
    .register(req.body, Role.Admin)
    .then(() => {
      res.status(httpStatus.CREATED).json("Created");
    })
    .catch(err => next(err));
};
