const { v4: uuidv4 } = require('uuid');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('teams').where({ league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38' }).del();

  await knex('teams').insert([
    {
      id: uuidv4(),
      name: 'ADANA DEMİRSPOR A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'ANTALYASPOR A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'ATAKAŞ HATAYSPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'BELLONA KAYSERİSPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'BEŞİKTAŞ A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'CORENDON ALANYASPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'ÇAYKUR RİZESPOR A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'FENERBAHÇE A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'GALATASARAY A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'GAZİANTEP FUTBOL KULÜBÜ A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'GÖZTEPE A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'İKAS EYÜPSPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'KASIMPAŞA A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'NET GLOBAL SİVASSPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'SAMSUNSPOR A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'SİPAY BODRUM FK',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'TRABZONSPOR A.Ş.',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv4(),
      name: 'TÜMOSAN KONYASPOR',
      league_id: 'f0bf3418-52c6-4db3-9fbb-f327814cfb38',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};
