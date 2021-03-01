const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  return jwt.sign({
    id: user.id,
    email: user.email
  }, "SECRET");
}

const verifyToken = (token) => {
  return jwt.verify(token, "SECRET");
}

module.exports = {
  generateToken,
  verifyToken
}