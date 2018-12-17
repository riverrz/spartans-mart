const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");

// User based utility functions

function getTokenFromHeader(req) {
  //Get the auth header value , else return false
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    return bearerHeader;
  } else {
    return false;
  }
}

async function getUserFromToken(req, res, next) {
  // Get token
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(403).json({
      message: "No token found"
    });
  }
  try {
    // Get authData present inside token
    const authData = await jwt.verify(token, keys.SECRET_KEY);
    if (!authData || !authData.id) {
      return res.status(403).json({
        error: "Token not valid"
      });
    }
    // Find the user based on id present in token
    const foundUser = await User.findById(authData.id);
    if (foundUser) {
      // Add user fields as per requirement in req.user
      req.user = {
        email: foundUser.email,
        id: authData.id
      };
      next();
    } else {
      throw new Error({ message: "User cant be found" });
    }
  } catch (error) {
    res.status(403).json(error);
  }
}

// Further improve input sanitization !!
function validateUser(req, res, next) {
  const { user } = req.body;
  if (!user || !user.email || !user.password) {
    return res.status(400).json({
      error: "Credentials missing"
    });
  }
  next();
}

// Sign token based on payload and return it
function signToken(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(payload, keys.SECRET_KEY);
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
}

// Product based utility functions
function validateProduct(req, res, next) {
  try {
    const product = req.body.product;
    if (
      !product ||
      !product.name ||
      !product.price ||
      !product.category ||
      !product.image
    ) {
      return res.status(400).json({
        error: "Missing details"
      });
    }
    product.price = parseInt(req.body.product.price);
    req.product = product;
    next();
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  validateUser,
  signToken,
  getUserFromToken,
  validateProduct
};
