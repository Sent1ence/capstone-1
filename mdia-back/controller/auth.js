const Auth = require('@model/Authenticate');
const bcrypt = require('bcryptjs');
const { CustomError } = require("@helper/error.js");

async function login (req, res, next) {
    try {
       const {username, password} = req.body
      
      // Check credentials
      const user = await Auth.query().findOne({ username: username });
      const validPass = await bcrypt.compare(password, user.password);
    


      if (!user || !validPass) {
        throw new CustomError(400, "Validation Error");
      }
      req.session.user = user;
      res.send(req.session.user)
    } catch (err) {
      next(err)
    }
}
module.exports = {
    login
}