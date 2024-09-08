const express = require("express");
const { formatApiResponse } = require("../utils/responseFormatter");
const AuthController = require('../controller/AuthController');
const CountryController = require('../controller/CountryController');
const LeagueController = require('../controller/LeagueController');
const TeamController = require('../controller/TeamController');
const SupporterController = require('../controller/SupporterController');

const userRoute = require('./user');
const countryRoute = require('./country');
const leagueRoute = require('./league');
const teamRoute = require('./team');


const { isAuth } = require("../middlewares/authMiddleware");



const router = express.Router();

router.post("/", (req, res, next) => {
    const response = formatApiResponse(
        req,
        "Api Viewing",
        "Getting Api list with ids and names",
        ""
    );
    res.json(response);
});

router.post('/login', AuthController.login);

router.post('/register', AuthController.register);

router.use(isAuth);

router.post('logout', AuthController.logout);

router.use('users', userRoute);

router.use('/countries', countryRoute);

router.use('/leagues', leagueRoute);

router.use('/teams', teamRoute);  

router.post('/supporter', SupporterController.store);




module.exports = { router };
