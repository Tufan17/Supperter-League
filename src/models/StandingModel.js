const BaseModel = require("./BaseModel");

class StandingModel extends BaseModel {
  constructor() {
    super("standings");
  }
}

module.exports = new StandingModel();