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
            JSON.stringify(teams)
            );
            res.status(200).json(response);
        
    }

      } catch (error) {
        next(error);
      }


}

module.exports={
    index,
};