const connection = require('../database/connection');



module.exports={
    async index(request, response){ //Retorna os dados específicos de uma única ONG.
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents') //Busca os incidents que essa ONG em específica criou
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    }
};