const bcrypt = require('bcrypt');
const User = require('../models/user');
const { generateToken } = require('../utils/jwtutils');


async function login(email, password) {
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User not found");
    }

    // Compare password
    const isPassword = await bcrypt.compare(password, existingUser.password);
    if (!isPassword) {
      throw new Error("Incorrect password");
    }

    // Generate JWT token
    const token = generateToken(existingUser);

    // Return token and user details (excluding password)
    return {
      token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        // password is not returned to the client
      },
    };
  } catch (error) {
    console.log("Login err:", error.message);
    throw new Error(error.message || "Login failed");
  }
}

module.exports = {
  login,
};