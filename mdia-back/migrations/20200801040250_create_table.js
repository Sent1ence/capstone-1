exports.up = function (knex) {
    return knex.schema
        .createTable('tbl_users', (table) => {
            table.increments('user_id').notNullable().primary();
            table.string('user_firstName').notNullable();
            table.string('user_lastName').notNullable();
            table.boolean('user_active').defaultTo(true).notNullable();
            table.string('user_username').notNull();
            table.string('user_password').notNull();
            table.string('user_address').notNull();
            table.string('user_email');
            table.timestamp('user_ccreated_at').defaultTo(knex.fn.now())
            table.decimal('user_balance', 10, 2)
            table.boolean('user_is_admin').defaultTo(false);
        })
        .createTable('tbl_equipment', (table) => {
            table.increments('equipment_no').notNullable().primary();
            table.string('equipment_name').notNullable();
            table.string('equipment_status').notNullable();
        })
        .createTable
        ('tbl_bill_details', (table) => {
            table.increments('bill_id').notNullable().primary();
            table.string('bill_type', [6]).notNullable();
            table.decimal('default_price', [10], [2]);
        })
        .createTable
        ('tbl_bill', (table) => {
            table.increments('bill_no').notNullable().primary();
            table.string('farm_address').notNullable();
            table.integer('farmer_id').notNullable().unsigned();
            table.integer('bill_type').notNullable().unsigned();
            table.decimal('bill_amount', [10], [2]);
            table.date('bill_date_issued');

            // Set foreign keys
            table.foreign("farmer_id")
                .references("user_id")
                .inTable("tbl_users")
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.foreign("bill_type")
                .references("bill_id")
                .inTable("tbl_bill_details")
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
}

exports.down = function (knex) {
    return (
        knex.schema
            // Delete on reverse order because of dependence
            .dropTableIfExists('tbl_bill')
            .dropTableIfExists('tbl_bill_details')
            .dropTableIfExists('tbl_users')
            .dropTableIfExists('tbl_equipment')


        //Alter table 
        /*  .table('tbl_equipment', table => {
             table.renameColumn('equipment_status', 'equipment_remark');
         }) */
    );
};

/* exports.down = function (knex) {
  return (
    knex.schema
      // Delte on reverse order because of dependency
      .dropTableIfExists('tbl_farm')
  );
}; */
