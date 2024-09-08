const TeamController = require('../controller/TeamController');
const { Router } = require('express');

const router = Router();

router.get('/', TeamController.index);
router.get('/:id', TeamController.read);
router.post('/', TeamController.store);
router.put('/', TeamController.update);
router.delete('/', TeamController.destroy);

module.exports = router;

