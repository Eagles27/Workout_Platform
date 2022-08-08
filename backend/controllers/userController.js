const User = require("../models/User");

// Login User
const loginUser = async (req, res) => {
  res.json({ msg: "Login User" });
};

// Sign Up User
const signupUser = async (req, res) => {
  res.json({ msg: "Sign Up User" });
};

module.exports = { loginUser, signupUser };
