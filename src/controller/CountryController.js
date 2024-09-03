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
  
  module.exports={
    index,
  };