const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  await knex('roles').del();

  await knex('roles').insert([
    {
      id: 'f465fb39-7d2a-40d0-be34-6239448fe12e',
      key: 'admin',
      name: 'Administrator',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null
    },
    {
      id: 'c961c528-12c5-46a8-8b3a-9c180b40f24b',
      key: 'user',
      name: 'User',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null
    }
  ]);
};
