const userService = require('../User/user.service');

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  checkLoggedInUser,
  signup
};

// signup user
async function signup(req, res, next) {
  try {
    const user = await userService.signup(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

// check logged in user
async function checkLoggedInUser(req, res, next) {
  try {
    const user = await userService.checkLoggedInUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
}
