
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  await knex('leagues').del();

  await knex('leagues').insert([
    {
      id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      name: 'Trendyol Süper Lig',
      country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
      deleted_at: null,
    },
 
  ]);
};
