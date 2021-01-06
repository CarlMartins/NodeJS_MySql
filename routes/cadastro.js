const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.Cadastro);
router.get('/posts', cadastroController.MostrarPosts);
router.post('/add', cadastroController.Add);
router.get('/deletar/:id', cadastroController.DeletarPost);

module.exports = router;