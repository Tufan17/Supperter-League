const BaseModel = require('./BaseModel');

class TeamModel extends BaseModel {
  constructor() {
    super('teams');
  }

  
}

module.exports = new TeamModel();
