const router = require('express').Router();

const Member = require('@model/Members.js')
const bcrypt = require('bcryptjs');

const { CustomError } = require("@helper/error.js");
const { isAuthenticated} = require('@helper/auth.js')
const userController = require("@controller/user")

router.route('/').get(isAuthenticated, userController.users);



router.route('/member/:id')
.get(async (req, res, next) => {

  let token = decodeToken()
  try {
    const memID = req.params.id
    const members = await Member.query().where('member_id', memID);

    if(members.length === 0) {
      throw new NotFoundError(members)
    }
    res.json(members)
  } catch (err) {
    next(err);
  }
  

})

router.route('/profile')
.get(isAuthenticated, async (req, res, next) => {
  try {
    const id = req.session.user.member_id
    const user = await Member.query().findOne({member_id: id}).throwIfNotFound()
    res.json(user)
  } catch (err) {
    next(err)
  }
  
})

router.post('/register', async (req, res, next) => {
  // Check if email and username is taken
  const emailExists = await Member.query().findOne({ member_email: req.body.member_email });
  const usermameExists = await Member.query().findOne({
    username: req.body.username,
  });
  if (emailExists) return res.status(400).send('Email Already exist');
  if (usermameExists) return res.status(400).send('Username Already taken');

  // Hash passwords

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt, (hashedPassword, err) => {
    if(err) {
      res.send(err)
    }
  });

  // Insert record into database
  try {
    const {member_fName, member_mi,  member_lName, member_email, username, member_dob, member_address} = req.body
    const newUser = await Member.query().insert({
      member_fName: member_fName,
      member_mi: member_mi,
      member_lName: member_lName,
      member_email: member_email,
      username: username,
      password: hashedPassword,
      member_dob: member_dob,
      member_address: member_address
    });
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

// Export to app.js
module.exports = router;
