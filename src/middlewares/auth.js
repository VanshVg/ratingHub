const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, resp, next) => {
  console.log(`Cookie inside auth ${req.cookies.token1}`);
};

module.exports = verifyToken;
