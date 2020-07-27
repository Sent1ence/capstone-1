const express = require('express');
const router = express.Router();
const User = require('../../models/Users.js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const verify = require('../auth');
path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

router.get('/', verify, async (req, res) => {
  const users = await User.query();
  res.json(users);
});

router.post('/register', verify, async (req, res) => {
  // Check if email and username is taken
  const emailExists = await User.query().findOne({ email: req.body.email });
  const usermameExists = await User.query().findOne({
    username: req.body.username,
  });
  if (emailExists) return res.status(400).send('Email Already exist');
  if (usermameExists) return res.status(400).send('Username Already taken');

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Insert record into database
  try {
    const user = await User.query().insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    res.send(user);
  } catch (err) {
    return res.status(400).json(err.data);
  }
});

// Export to app.js
module.exports = router;
