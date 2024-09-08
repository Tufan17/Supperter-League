const CountryModel = require('../models/CountryModel');
const { formatApiResponse } = require("../utils/responseFormatter");

const index = async (req, res, next) => {
    try {
      const countries = await CountryModel.countries();
      const response = formatApiResponse(
        req,
        "Country List Request",
        "Country List Request Success.",
        JSON.stringify(countries)
      );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };


  const read = async (req, res, next) => {
    try {
      const id =req.params.id;
      const country = await CountryModel.findId(id);
      if(country){
        const response = formatApiResponse(
          req,
          "Country Read Request",
          "Country Read Request Success.",
          JSON.stringify(country)
        );
        res.status(200).json(response);  
      }else{
        const response = formatApiResponse(
          req,
          "Country Read Request",
          "Country Read Request Error.",
          "Country Read Request Error: country not found",
        );
        res.status(400).json(response);  
      }
      } catch (error) {
      next(error);
    }
  };

const store = async (req, res, next) => {
    try{
        const { key, name, logo } = req.body;

        if (!key || !name) {
          const response = formatApiResponse(
            req,
            "Country Store Request",
            "Country Store Request Error.",
            "Country Store Request Error: Key and name are required fields.",
          );
          res.status(400).json(response);  
        }  
        const country=await CountryModel.where('key',key);
        if(!country){
          const response = formatApiResponse(
            req,
            "Country Store Request",
            "Country Store Request Error.",
            "Country Store Request Error: This Key already exists",
          );
          res.status(400).json(response);  
        }else{
          const newCountry = await CountryModel.create({ key, name, logo });
          const response = formatApiResponse(
            req,
            "Country Store Request",
            "Country Store Request Success.",
            JSON.stringify(newCountry)
          );
          res.status(200).json(response);  
        }
    }catch (error) {
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