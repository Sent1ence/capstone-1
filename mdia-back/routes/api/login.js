const router = require('express').Router();
const Auth = require('../../models/Authenticate');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

router.post('/', async (req, res) => {
  // Check from the database if username is registered
  const user = await Auth.query().findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Username not registered');

  // Verify password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Password is incorrect!');

  // Create and assign token
  const token = jwt.sign(
    { _id: user.id, _fName: user.firstName },
    process.env.TOKEN_SECRET,
    { expiresIn: '30m' }
  );
  res.header('auth-token', token).send(token);
});

// Export to app.js
module.exports = router;
