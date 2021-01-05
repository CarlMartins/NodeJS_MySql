exports.Add = (req, res) =>
{
    res.send(`Texto: ${req.body.titulo} - Conteudo: ${req.body.conteudo}`);
}