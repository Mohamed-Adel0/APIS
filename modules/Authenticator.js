const jwt = require('jsonwebtoken')

const Authenticator = (token)=>{
return  jwt.verify(token,process.env.JWT_SECRET_KEY)
}

module.exports = Authenticator