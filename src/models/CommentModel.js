const BaseModel = require('./BaseModel');

class CommentModel extends BaseModel {
  constructor() {
    super('comments');
  }

  
}

module.exports = new CommentModel();
