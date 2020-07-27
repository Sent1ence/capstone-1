const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'tbl_user';
  }

  // For input validation. This is not for database schema
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'username', 'password', 'email'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLenth: 25 },
        lastName: { type: 'string', minLength: 1, maxLenth: 25 },
        active: { type: 'boolean' }, //optional
        username: { type: 'string', minLength: 6, maxLenth: 25 },
        password: { type: 'string', minLength: 6, maxLenth: 600 },
        email: {
          type: 'string',
          format: 'email',
        },
      },
    };
  }
}

module.exports = User;
