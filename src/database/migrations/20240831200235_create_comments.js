/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('comments', function(table) {
        table.uuid('id').primary();
        table.enu('type', ['fixtures', 'forms']).notNullable();
        table.uuid('target_id').notNullable();
        table.text('text').notNullable();
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('comments');
  
};
