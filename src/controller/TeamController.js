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
      }else{
        const response = formatApiResponse(
          req,
          "Teams List Request",
          "Teams List Request Err.",
          "This league does not exist"
          );
          res.status(400).json(response);   
      }

      } catch (error) {
        next(error);
      }


}


const read = async (req, res, next) => {
  const id = req.params.id;
  try {
    const exists = await TeamModel.exists(id);
  if(exists){
      const team=await TeamModel.findId(id);

          const response = formatApiResponse(
          req,
          "Teams Read Request",
          "Teams Read Request Success.",
          team
          );
          res.status(200).json(response);
      
  }

    } catch (error) {
      next(error);
    }
}

const store = async (req, res, next) => {
  try{
    const {league_id,name,logo}=req.body;
    let logoURL=null;
    if(logo){
      // buraya dosya yğkleme gelecek 
    }
    const exists = await LeagueModel.exists(id);
    if(exists){
      const data = {name,league_id,logoURL};

      await TeamModel.create(data);

      const response = formatApiResponse(
              req,
              "Teams List Request",
              "Teams List Request Err.",
              data
              );
        res.status(200).json(response);   
    }else{
      const response = formatApiResponse(
        req,
        "Teams Create Request",
        "Teams Create Request Err.",
        "This league does not exist"
        );
        res.status(400).json(response);   
    }
  }catch (error) {
    next(error);
  }
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