const TeamModel = require('../models/TeamModel');
const { formatApiResponse } = require("../utils/responseFormatter");
const LeagueModel = require('../models/LeagueModel');

const index = async (req, res, next) => {
    const id = req.params.id;
    try {
      const exists = await LeagueModel.exists(id);
    if(exists){
        const teams=await TeamModel.where('league_id', id);

            const response = formatApiResponse(
            req,
            "Teams List Request",
            "Teams List Request Success.",
            teams
            );
            res.status(200).json(response);
        
    }

      } catch (error) {
        next(error);
      }


}


const read = async (req, res, next) => {

}

const store = async (req, res, next) => {

}

const update = async (req, res, next) => {

}

const destroy = async (req, res, next) => {

}

  
  module.exports={
    index,
    read,
    store,
    update,
    destroy
  };