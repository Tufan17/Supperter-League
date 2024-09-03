/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('countries', function(table) {
        table.uuid('id').primary();
        table.string('logo').notNullable().defaultTo('/storage/defaults/country.png');
        table.string('key').notNullable().unique();
        table.string('name').notNullable();
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('countries');
  
};
