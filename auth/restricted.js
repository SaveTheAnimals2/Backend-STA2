const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if(token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if(err) {
          res.status(401).json({ message: "You are not authorized, try logging in again" })
        } else {
          req.user = decodedToken.user;
          next();
        }
      })
    } else {
      res.status(401).json({ message: "Please include a login token and try logging in again" })
    }
  };