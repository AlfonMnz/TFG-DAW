const router = require('express').Router();
const usuarioController = require('../controllers/usuarioController');


router.get('/', usuarioController.listAll);
router.post('/logueo', usuarioController.listOne);
router.post('/registrar', usuarioController.insertUser);
router.post('/consulta', usuarioController.contactForm);
router.post('/getOne', usuarioController.getOne);
router.post('/editar', usuarioController.editAccount)
module.exports = router;