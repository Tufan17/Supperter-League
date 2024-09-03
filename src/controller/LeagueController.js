const LeagueModel = require('../models/LeagueModel');
const { formatApiResponse } = require("../utils/responseFormatter");
const CountryModel = require('../models/CountryModel');

const index = async (req, res, next) => {
    const id = req.params.id;

    try {
      const exists = await CountryModel.exists(id);
    if(exists){
        const leagues=await LeagueModel.where('country_id', id);

            const response = formatApiResponse(
            req,
            "Leagues List Request",
            "Leagues List Request Success.",
            JSON.stringify(leagues)
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