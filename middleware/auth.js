const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //Gets payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //Get access to payload
    req.user = decoded.user;
    //Move to next
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is invalid' });
  }
};
