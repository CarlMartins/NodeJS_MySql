const Post = require('../models/Posts');

exports.Add = (req, res) =>
{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() =>
    {
        res.redirect('/');
    }).catch((erro) =>
    {
        res.send("Falha ao criar o post");
    });
}