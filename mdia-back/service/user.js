const userDAO = require('@dao/user');
const bcrypt = require('bcryptjs');
const { CustomError } = require("@helper/error.js");

async function login(username, password, next) {
    try {
        const user = await userDAO.findUserByUsername(username);
        if(!user) {
            throw new CustomError(401, "Wrong username or password", "ValidationError");
        }
        // we do not need to hash our plain text password 
        // before we pass it to bcrypt.compare
        // bcrypt.compare will always return resolved Promise with a boolean value
        // indicating whether the password hashes match
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            return {id: user.member_id, role: user.role};
        } else {
            throw new CustomError(401, "Wrong username or password", "ValidationError");
        }
    } catch(err) {
        return err
    }
}

module.exports = {login};