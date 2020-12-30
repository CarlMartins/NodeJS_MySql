const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const cadastroController = require('./controllers/cadastroController');

// Config
//// Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//// Conexão MySQL
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postagensdb', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

//// Inicialização do servidor
app.listen(3000, () =>
{
    console.log("Servidor rodando na URL: http://localhost:3000");
});

sequelize.authenticate()
    .then(() => 
    {
        console.log("Conectado com sucesso ao banco de dados.");
    })
    .catch((erro) =>
    {
        console.log("Falha na conexão com o banco de dados");
    });

// Rotas

const cadastroRouter = require("./routes/cadastro");


app.use('/cadastro', cadastroRouter);



