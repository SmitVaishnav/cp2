const db = require("../helpers/db.helper");
// use bcrypt to hash passwords
const bcrypt = require("bcryptjs");
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
async function signup(userParams) {
  // validate
  if (await db.User.findOne({ where: { email: userParams.email } })) {
    throw 'Email "' + userParams.email + '" is already taken';
  }
  return await db.User.create(userParams);
}

// if found send 200 ok else appropriate error message with status code
async function checkLoggedInUser(userParams) {
  const user = await db.User.findOne({ where: { email: userParams.email } });
  const hashedPassword = bcrypt.hashSync(user.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
  console.log("hashedPassword", hashedPassword);
  // console.log(hashedPassword);

  if(!user || hashedPassword !== userParams.password) throw 'Invalid email or password';
  return user;
}

async function getAllUsers() {
  return await db.User.findAll();
}

async function getUserById(id) {
  return await db.User.findByPk(id);
}

async function createUser(userParams) {
  return await db.User.create(userParams);
}

async function updateUser(id, userParams) {
  const user = await db.User.findByPk(id);
  if (!user) throw 'User not found';
  Object.assign(user, userParams);
  await user.save();
  return user;
}

async function deleteUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw 'User not found';
  await user.destroy();
}
