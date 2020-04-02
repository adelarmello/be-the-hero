const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({
        evento: 'Semana OminiStak',
        Descrição: "Criando o projeto com Node.js e React.js"
    });
});

app.listen(3333);