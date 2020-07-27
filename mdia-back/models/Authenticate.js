const { Model } = require('objection');

class Auth extends Model {
  static get tableName() {
    return 'tbl_user';
  }

  // For input validation. This is not for database schema
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['fusername', 'password'],

      properties: {
        username: { type: 'string', minLength: 6, maxLenth: 25 },
        password: { type: 'string', minLength: 6, maxLenth: 600 },
      },
    };
  }
}

module.exports = Auth;
