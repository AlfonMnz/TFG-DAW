const router = require('express').Router();
const vueloController = require('../controllers/vueloController');

router.get('/', vueloController.listAll);
router.post('/addvuelo', vueloController.addNewFly);
router.post('/search', vueloController.searchFlies);
router.post('/now', vueloController.getAllNow)
module.exports = router;