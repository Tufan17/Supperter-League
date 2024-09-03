/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('forms', function(table) {
        table.uuid('id').primary();
        table.enu('type', ['user', 'form']).notNullable();
        table.uuid('target_id').notNullable();
        table.text('text').notNullable();
        table.uuid('team_id').notNullable();
        table.foreign('team_id').references('id').inTable('teams');
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('forms');
  
};
