/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('supporter', function(table) {
        table.uuid('id').primary();
        table.uuid('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
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
    await knex.schema.dropTable('supporter');
  
};
