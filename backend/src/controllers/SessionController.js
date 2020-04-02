const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body; //Guarda o ID da ONG que está tentando fazer o login

        const ong = await connection('ongs') //Busca a ONG pelo ID
            .where('id', id)
            .select('name')
            .first();
        if ( !ong ) {
            return response.status(400).json({ error: 'Não existe ONG com esse ID!' });
        }

        return response.json(ong);

    }
}