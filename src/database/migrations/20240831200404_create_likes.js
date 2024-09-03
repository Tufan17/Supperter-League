/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =async function(knex) {
    await knex.schema.createTable('likes', function(table) {
        table.uuid('id').primary();
        table.enu('type', ['comment', 'forms']).notNullable();
        table.enu('behaviour', ['like', 'dislike']).notNullable();
        table.uuid('target_id').notNullable();        
        table.uuid('user_id').notNullable(); 
        table.foreign('user_id').references('id').inTable('users');
        table.timestamps(true, true);
        table.timestamp('deleted_at').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTable('likes');
  
};
