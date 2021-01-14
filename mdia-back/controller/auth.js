const authService = require('@service/user.js')
const { CustomError } = require("@helper/error.js");

async function login (req, res, next) {
    try {
       const {username, password} = req.body

       if(!username || !password){
         throw new CustomError(400, "You need to provide username and password", "BadRequest")
       }
      
      // Check credentials
        const user = await authService.login(username, password)
        if(user.id) {
          req.session.user = user;
          res.send(req.session.user)
        } else {
          next(user)
        }
      
    } catch (err) {
      next(err)
    }
}
module.exports = {
    login
}