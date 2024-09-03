/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('users', function(table) {
       table.uuid('id').primary();
        table.string('avatar').nullable().defaultTo('/storage/defaults/user.png');
        table.string('nickname').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('name').notNullable();
        table.string('surname').notNullable();
        table.string('password').notNullable();
        table.uuid('role_id').notNullable();
        table.foreign('role_id').references('id').inTable('roles');
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
    await knex.schema.dropTable('users');
};
