const BaseModel = require('./BaseModel');

class LeagueModel extends BaseModel {
  constructor() {
    super('leagues');
  }

  
}

module.exports = new LeagueModel();
