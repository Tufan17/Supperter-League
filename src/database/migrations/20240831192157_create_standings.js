/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('standings', function(table) {
       table.uuid('id').primary();
       table.enu('type', ['users', 'teams']).notNullable();
        table.uuid('target_id').notNullable();
        table.double('point').notNullable();
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('standings');
  
};
