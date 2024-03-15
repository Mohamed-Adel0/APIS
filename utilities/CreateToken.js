const jwt = require("jsonwebtoken");

const CreateToken = (username, email, type) => {
  return jwt.sign(
    {
      username,
      email,
      type,
    },
    process.env.JWT_SECRET_KEY
  );
};

module.exports = CreateToken;
