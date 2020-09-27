const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'tbl_users';
  }

  // For input validation. This is not for database schema
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_firstName', 'user_lastName', 'user_username', 'user_password', 'user_address', 'user_email', 'user_balance'],

      properties: {
        user_id: { type: 'integer' },
        user_firstName: { type: 'string', minLength: 1, maxLenth: 25 },
        user_lastName: { type: 'string', minLength: 1, maxLenth: 25 },
        user_active: { type: 'boolean' }, //optional
        user_username: { type: 'string', minLength: 6, maxLenth: 25 },
        user_password: { type: 'string', minLength: 6, maxLenth: 600 },
        user_address: { type: 'string', minLength: 6, maxLenth: 600 },
        user_email: {
          type: 'string',
          format: 'email',
        },
        user_balance: { type: 'number', minLength: 1, maxLenth: 10 },
      },
    };
  }
}

module.exports = User;
