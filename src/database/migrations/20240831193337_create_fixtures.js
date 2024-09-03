/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('fixtures', function(table) {
        table.uuid('id').primary();
        table.uuid('homeowner_id').notNullable();
        table.foreign('homeowner_id').references('id').inTable('teams');
        table.uuid('guest_id').notNullable();
        table.foreign('guest_id').references('id').inTable('teams');
        table.double('ms1').nullable();
        table.double('msx').nullable();
        table.double('ms2').nullable();
        table.enu('status', ['waiting', 'playing','end']).notNullable();
        table.enu('result', ['ms1', 'msx','ms2','none']).notNullable().defaultTo('none');
        table.datetime('date').nullable();
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('fixtures');
  
};
