const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// Config
//// Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//// Inicialização do servidor
app.listen(3000, () =>
{
    console.log("Servidor rodando na URL: http://localhost:3000");
});

// Rotas
const cadastroRouter = require("./routes/cadastro");
app.use('/cadastro', cadastroRouter);

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

