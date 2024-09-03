const BaseModel = require('./BaseModel');

class LikeModel extends BaseModel {
  constructor() {
    super('likes');
  }

  
}

module.exports = new LikeModel();
