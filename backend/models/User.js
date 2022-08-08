const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// Static method to authenticate user
UserSchema.statics.signup = async function (email, password) {
  // Inputs validation
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email is invalid");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hashedPassword,
  });

  return user;
};

module.exports = mongoose.model("User", UserSchema);
