const SupporterModel = require('../models/SupporterModel.js')

const store = async (req, res, next) => {
const {user_id,team_id}= req.body;

return {user_id,team_id};

};

module.exports={
    store,
    
};