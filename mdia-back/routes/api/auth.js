const router = require('express').Router();
const Auth = require('@model/Authenticate');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const {
  jwt: { generateToken },
} = require('../middleware');
const { CustomError } = require('../../helpers/error');


router.post('/', async (req, res, next) => {
  // Check from the database if username is registered
  const {username, password} = req.body
    try {
      if( username && password) {
        const user = await Auth.query().findOne({ username: username })
        /* if (!user) return res.status(400).send('Username not registered'); */
        if(!user) {
          throw new CustomError(404,`Username ${username} not found`, "NotFoundError");
        }
    
        // Verify password
        const validPass = await bcrypt.compare(password, user.password);
        /* if (!validPass) return res.status(400).send('Password is incorrect!'); */
        if (!validPass) {
          throw new CustomError(500, "Validation Error");
        }
        const token = generateToken(user.member_id)
    
        let payload = {
          id: user.member_id,
          token
        }
        res.send(payload);
      
    }else {
        throw new CustomError(404, "Missing input fields")
      }
    } catch (err) {
      next(err)
    }
});

// Export to app.js
module.exports = router;
