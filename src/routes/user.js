const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.get('/1', UserController.index);
router.get('/:id', UserController.read);
router.post('/', UserController.store);
router.put('/', UserController.update);
router.delete('/', UserController.destroy);

module.exports = router;
