const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Config
// Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(3000, () =>
{
    console.log("Servidor rodando na URL: http://localhost:3000");
});

