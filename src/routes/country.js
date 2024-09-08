const express= require('express');
const CountryController = require('../controller/CountryController');

const router = express.Router();

router.get('/', CountryController.index);  

router.get('/:id', CountryController.read);  

router.post('/', CountryController.store);  

router.put('/', CountryController.update);  

router.delete('/', CountryController.destroy);  

module.exports = router;
