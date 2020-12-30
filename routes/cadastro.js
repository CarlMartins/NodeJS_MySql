const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.Cadastro);

module.exports = router;