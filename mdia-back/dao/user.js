const Auth = require('@model/Authenticate')
const { CustomError } = require("@helper/error.js");

async function findUserByUsername(username) {
    const user = await Auth.query().findOne({ username: username });
    return user
}

module.exports = {findUserByUsername};