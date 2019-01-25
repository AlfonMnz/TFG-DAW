const router = require('express').Router();
const aerolineasController = require('../controllers/aerolineasController');

router.get('/', aerolineasController.listAll);
router.post('/addaerolinea', aerolineasController.addNewAerolinea);
router.post('/updateaerolinea', aerolineasController.updateAerolinea);


module.exports = router;
