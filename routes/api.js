const express = require("express");
const { formatApiResponse } = require("../src/utils/responseFormatter");
const userRoute = require('../src/routes/userRouter');
const AuthController = require('../src/controller/AuthController');
const CountryController = require('../src/controller/CountryController');
const LeagueController = require('../src/controller/LeagueController');
const { isAuth } = require("../src/middlewares/authMiddleware");



const apiRouter = express.Router();

apiRouter.post("/", (req, res, next) => {
    const response = formatApiResponse(
        req,
        "Api Viewing",
        "Getting Api list with ids and names",
        ""
    );
    res.json(response);
});

apiRouter.post('/login', AuthController.login);

apiRouter.post('/register', AuthController.register);


apiRouter.use(isAuth);

apiRouter.post('/logout', AuthController.logout);

apiRouter.post('/countries', CountryController.index);  //  Tüm ülkeler okuma

apiRouter.post('/leagues/:id', LeagueController.index);  //  Ülkenin Tüm Ligleri



apiRouter.use('/user', userRoute);

apiRouter.use('/user', userRoute);


module.exports = { apiRouter };
