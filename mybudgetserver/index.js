const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var http = require('http');
const httpProxy = require('express-http-proxy')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
var cors = require('cors')
require("dotenv-safe").load();

var FrequenciaController = require('./app/controllers/FrequenciaController');
var AgendamentoController = require('./app/controllers/AgendamentoController');
var CategoriaController = require('./app/controllers/CategoriaController');
var LoginController = require('./app/controllers/LoginController');
var SugestaoInvestimentoController = require('./app/controllers/SugestaoInvestimentoController');
var ReceitaController = require('./app/controllers/ReceitaController');
var DespesaController = require('./app/controllers/DespesaController');

var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require("swagger-jsdoc");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(logger('dev'));
app.use(helmet());;
app.use(cookieParser());
app.options('*', cors())


var swaggerDefinition = {
  info: {
    title: 'API Sistema MyBudget',
    version: '1.0.0',
    description: 'Documentação da API do sistema MyBudget',
  },
  host: 'localhost:3000',
  basePath: '/',
};
var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./app/controllers/*.js'],
};
var swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/frequencia', FrequenciaController);
app.use('/agendamento', AgendamentoController);
app.use('/categoria', CategoriaController);
app.use('/login', LoginController);
app.use('/sugestao-investimento', SugestaoInvestimentoController);
app.use('/receita', ReceitaController);
app.use('/despesa', DespesaController);

app.listen(8080);