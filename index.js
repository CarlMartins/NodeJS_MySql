const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

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

sequelize.authenticate()
    .then(() => 
    {
        console.log("Conectado com sucesso ao banco de dados.");
    })
    .catch((erro) =>
    {
        console.log("Falha na conexão com o banco de dados");
    });

app.listen(3000, () =>
{
    console.log("Servidor rodando na URL: http://localhost:3000");
});

