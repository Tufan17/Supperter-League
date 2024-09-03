const BaseModel = require('./BaseModel');
const connection = require('../database/connection');

class CountryModel extends BaseModel {
  constructor() {
    super('countries');
  }

  async countries() {
    const data = await connection.table(this.modelName)
      .leftJoin('leagues', 'countries.id', '=', 'leagues.country_id')
      .whereNull('countries.deleted_at')
      .groupBy('countries.id', 'countries.logo', 'countries.name', 'countries.key')
      .select(
        'countries.id',
        'countries.logo',
        'countries.name',
        'countries.key',
        connection.raw('COUNT(leagues.id) > 0 AS league_exists')
      );
  
    return data;
  }
  
  
}

module.exports = new CountryModel();
