const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
  // Verify authentification
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" });
  }

  const token = authorization.split(" ")[1]; // authorization: Bearer <token>

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id"); // select only _id from user
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = requireAuth;
