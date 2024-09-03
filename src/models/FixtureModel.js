const BaseModel = require('./BaseModel');

class FixtureModel extends BaseModel {
  constructor() {
    super('fixtures');
  }

  
}

module.exports = new FixtureModel();
