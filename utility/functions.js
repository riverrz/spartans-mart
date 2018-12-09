const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");

function getTokenFromHeader(req) {
  //Get the auth header value , if undefined send 403 response
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    return bearerHeader;
  } else {
    return false;
  }
}

async function getUserFromToken(req, res, next) {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(403).json({
      message: "No token found"
    });
  }
  try {
    const authData = await jwt.verify(token, keys.SECRET_KEY);
    if (!authData || !authData.id) {
      return res.status(403).json({
        error: "Token not valid"
      });
    }
    const foundUser = await User.findById(authData.id);
    if (foundUser) {
      // Add user fields required in req.user
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

function validateUser(req, res, next) {
  const { user } = req.body;
  if (!user || !user.email || !user.password) {
    return res.status(400).json({
      error: "Credentials missing"
    });
  }
  next();
}

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

module.exports = {
  validateUser,
  signToken,
  getUserFromToken
};
