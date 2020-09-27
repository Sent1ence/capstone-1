const { Model } = require('objection');

class Water extends Model {
    static get tableName() {
        return 'tbl_water';
    }

    // For input validation. This is not for database schema
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['waterData_date', 'waterData_data'],

            properties: {
                wateData_no: { type: 'integer' },
                waterData_data: { type: 'string', minLength: 1, maxLenth: 25 },
                waterData_data: { type: 'double', minLength: 1, maxLenth: 6 },
            },
        };
    }
}

module.exports = Water;
