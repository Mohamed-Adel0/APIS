const JWT = require("jsonwebtoken");

const Authenticator = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = Authenticator;
