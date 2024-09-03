/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('teams', function(table) {
       table.uuid('id').primary();
        table.string('logo').nullable().defaultTo('/storage/defaults/team.png');
        table.string('name').notNullable();
        table.uuid('league_id').notNullable();
        table.foreign('league_id').references('id').inTable('leagues');
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('teams');
  
};
