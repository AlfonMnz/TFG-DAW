const router = require('express').Router();
const billeteController = require('../controllers/billeteController');

router.get('/', billeteController.listAll);
router.post('/user', billeteController.listUser);
router.post('/getFly', billeteController.searchFly)
router.post('/buy', billeteController.buyFly)
router.post('/userNow', billeteController.listUserNow);
router.post('/userLast', billeteController.listUserLast);
module.exports = router;