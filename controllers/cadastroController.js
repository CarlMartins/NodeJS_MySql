const Post = require('../models/Posts');

exports.Cadastro = (req, res) =>
{
    res.render("formulario")
};

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
};

exports.MostrarPosts = (req, res) =>
{
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) =>
    {
        res.render('mostrarPosts', {
            posts: posts
        });
    })
}

exports.DeletarPost = (req, res) =>
{
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() =>
    {
        res.redirect('/cadastro/posts');
    }).catch((erro) =>
    {
        res.send(`Essa postagem não existe. Erro: ${erro}`)
    })
}