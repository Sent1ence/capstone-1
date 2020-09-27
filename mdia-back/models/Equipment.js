const { Model } = require('objection');

class Equipment extends Model {
    static get tableName() {
        return 'tbl_equipment';
    }

    // For input validation. This is not for database schema
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['equipment_name', 'equipment_category'],

            properties: {
                equipment_no: { type: 'integer' },
                equipment_name: { type: 'string', minLength: 1, maxLenth: 25 },
                equipment_status: { type: 'string', minLength: 1, maxLenth: 25 },
                equipment_category: { type: 'string', minLength: 1, maxLenth: 25 },
                image_path: { type: 'string', minLength: 1, maxLenth: 50 }
            },
        };
    }
}

module.exports = Equipment;
