const User = require("../models/User");
const { createToken } = require("../utilities");

// Create a new user with the user object
// Throws email already exists exception

async function signUp(user) {
  const newUser = await User.create(user);
  return newUser;
}

async function signIn(user) {
  const existingUser = await User.findOne({ email: user.email });

  if (!existingUser.comparePassword(user.password)) {
    throw "Passwords don't match";
  }
  //Create token

  const token = createToken({
    id: existingUser._id,
    isAdmin: existingUser.isAdmin,
  });
  return token;
}

module.exports = {
  signUp,
  signIn,
};
