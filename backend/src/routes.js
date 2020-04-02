const express = require('express');
const routes = express.Router();

routes.post('/users', (request, response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OminiStak',
        aluno: "Diego da Silva"
    });
});

module.exports = routes;

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados anviados na rota após "?"(Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

