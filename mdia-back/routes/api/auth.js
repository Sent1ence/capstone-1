const router = require('express').Router();
const Auth = require('@model/Authenticate');
const bcrypt = require('bcryptjs');
const authController = require('@controller/auth.js')
const { CustomError } = require("@helper/error.js");

router.post('/login',  authController.login)
/* try {
  const {username, password} = req.body;

  // Check credentials
  const user = await Auth.query().findOne({ username: username });
  const validPass = await bcrypt.compare(password, user.password);

  //Throw error if login unsuccesful
  if (!user || !validPass) {
    throw new CustomError(403, "Unauthorize");
    
  }

  req.session.clientID = user.member_id;
  res.send('You are now logged in');

} catch (err) {
  next(err)
} */
  



// Export to app.js
module.exports = router;

/* const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}; */