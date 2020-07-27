const { Model } = require('objection');
const User = require('./Users.js');

class Farm extends Model {
  static get tableName() {
    return 'tbl_farm';
  }

  // Define relationship to other models
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tbl_farm.owner_id',
          to: 'tbl_user.id',
        },
      },
    };
  }
}
module.exports = Farm;
