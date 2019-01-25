const router = require('express').Router();
const avionController = require('../controllers/avionController');

router.get('/', avionController.listAll);
router.post('/addavion', avionController.addNewPlane)

module.exports = router;