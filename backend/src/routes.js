const express = require('express');

const OngController = require('./controllers/OngController');


const routes = express.Router();

routes.get('/ongs',  OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;















/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

