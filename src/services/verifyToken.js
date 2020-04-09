const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if(!token) return res.status(401).send('Access Denied');

  try {
    // Bearer ...
    const verified = jwt.verify(token.split(' ')[1], process.env.TOKEN_SECRET);

    req.user = verified;
    console.log('verified', verified);

    next();

  } catch (err) {
    res.status(400).send('Invalid Token');

  };
};


module.exports = {
  verifyToken
};