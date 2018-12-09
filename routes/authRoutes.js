const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// Importing utility funtions
const {
  validateUser,
  signToken,
  getUserFromToken
} = require("../utility/functions");

// Importing model
const User = require("../models/User");

router.post("/register", validateUser, async function(req, res, next) {
  const { user } = req.body;
  try {
    const hash = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      email: user.email,
      password: hash
    });
    const foundUser = await User.findOne({ email: newUser.email });
    if (foundUser) {
      return res.status(400).json({
        error: "User with this email already exists"
      });
    }
    await newUser.save();
    const token = await signToken({ id: newUser.id });
    res.status(201).json({
      email: user.email,
      token: token
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", validateUser, async function(req, res, next) {
  //Get user from body
  const { user } = req.body;
  try {
    const foundUser = await User.findOne({
      email: user.email
    });
    // First find user by email
    if (!foundUser) {
      return res.status(401).json({
        error: "Invalid email/password"
      });
    }
    // compare given password and stored hash password
    const isMatch = await bcrypt.compare(user.password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid email/password"
      });
    }
    const token = await signToken({ id: foundUser.id });
    res.status(200).json({
      email: foundUser.email,
      token: token
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dummy route to fetch a user from token

router.get("/getUser", getUserFromToken, function(req, res, next) {
  //verify token from jwt
  res.json(req.user);
});

module.exports = router;
