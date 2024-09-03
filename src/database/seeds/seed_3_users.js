const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('users').del();

  await knex('users').insert([
    {
      id: faker.datatype.uuid(),
      avatar: '/storage/defaults/user.png',
      nickname: 'admin',
      email: 'admin@taraftarlarlig.com',
      name: 'Admin',
      surname: 'User',
      password: '99e2cf788f1f883f47f9a8d7387412bd', 
      role_id: 'f465fb39-7d2a-40d0-be34-6239448fe12e',
      country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null,
    },
    {
      id: faker.datatype.uuid(),
      avatar: '/storage/defaults/user.png',
      nickname: 'user',
      email: 'user@taraftarlarlig.com',
      name: 'Regular',
      surname: 'User',
      password: '99e2cf788f1f883f47f9a8d7387412bd', 
      role_id: 'c961c528-12c5-46a8-8b3a-9c180b40f24b', 
      country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null,
    }
  ]);

  // Insert 100 fake users
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
      id: faker.datatype.uuid(),
      avatar: '/storage/defaults/user.png',
      nickname: faker.internet.userName(),
      email: faker.internet.email(),
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      password: '99e2cf788f1f883f47f9a8d7387412bd', 
      role_id: 'c961c528-12c5-46a8-8b3a-9c180b40f24b', 
      country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null,
    });
  }

  await knex('users').insert(users);
};
