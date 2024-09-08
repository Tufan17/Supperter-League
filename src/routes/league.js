const { Router } = require('express');
const LeagueController = require('../controller/LeagueController');

const router = Router();

router.get('/', LeagueController.index);  

router.get('/:id', LeagueController.read);  

router.post('/', LeagueController.store); 

router.put('/', LeagueController.update);  

router.delete('/', LeagueController.destroy);  

module.exports = router;
