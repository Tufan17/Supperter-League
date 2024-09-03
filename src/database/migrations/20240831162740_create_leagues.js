/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('leagues', function(table) {
        table.uuid('id').primary();
        table.string('logo').nullable().defaultTo('/storage/defaults/league.png');
        table.string('name').notNullable();
        table.uuid('country_id').notNullable();
        table.foreign('country_id').references('id').inTable('countries');
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('leagues');
  
};
