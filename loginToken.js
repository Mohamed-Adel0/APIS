const jwt = require("jsonwebtoken")
const auth = (token)=>{
    return jwt.verify(token,process.env.token)
}

module.exports = auth