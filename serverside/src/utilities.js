const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const createResponse = (data, ststus, error = null) => {
  return {
    data,
    ststus,
    error,
  };
};

const createToken = (body) => {
  return jwt.sign(body, process.env.SECRET, {
    expiresIn: "2d",
  });
};
const decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = {
  createResponse,
  createToken,
  decodeToken,
};
