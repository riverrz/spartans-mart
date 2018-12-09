const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const keys = require("../config/keys");

router.post("/register", function(req, res, next) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      res.status(500).json({
        error: err
      });
      next();
    } else {
      const user = {
        email: req.body.email,
        password: hash
      };
      //save user into db here
      jwt.sign(user, keys.SECRET_KEY, function(err, token) {
        if (err) {
          res.status(500).json({
            error: err
          });
        } else {
          res.status(201).json({
            email: user.email,
            token: token
          });
        }
      });
    }
  });
});

router.post("/login", function(req, res, next) {
  //Get user from body
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  //add proper password validation here
  jwt.sign(user, keys.SECRET_KEY, function(err, token) {
    res.status(200).json({
      email: user.email,
      token: token
    });
  });
});

//Protected api route for token verification purposes
router.get("/test", verifyToken, function(req, res, next) {
  //verify token from jwt
  jwt.verify(req.token, keys.SECRET_KEY, function(err, authData) {
    if (err) {
      res.status(403).json({
        error: err
      });
    } else {
      res.status(200).json({
        message: "Protected api route sucessfully accessed",
        authData: authData
      });
    }
  });
});

function verifyToken(req, res, next) {
  //Get the auth header value , if undefined send 403 response
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    req.token = bearerHeader;
    next();
  } else {
    res.status(403).json({
      message: "No token found"
    });
  }
}

module.exports = router;
