const Member = require('@model/Members.js')
const { CustomError } = require("@helper/error.js");



async function  users(req, res) {
    const users = await Member.query();
    res.json(users);
}
module.exports = {
    users
}