/*
 * Custom Authenticator helper
 */

const { CustomError } = require("@helper/error.js");

function isAuthenticated(req, res, next) {
  try {
    if (!req.session || !req.session.user) {
        throw new CustomError(403, "Unauthorize");
    
    } else {
        next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { isAuthenticated };