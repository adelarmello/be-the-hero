const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query; //ESSA É UMA PAGINAÇÃO PRA MOSTRAR SÓ 5  CASOS. Busca a página

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)    //retornar só 5 incidentes
            .offset((page -1) *5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);      

        return response.json(incidents);
    },
    async create(request, response ){
        const {title, description, value} = request.body; 
        const ong_id = request.headers.authorization; 

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });  
    },
    async delete(request, response){
        const { id } = request.params; //pegar o id do incident
        const ong_id = request.headers.authorization; //pegar o id da ong         

        const incident = await connection('incidents') // procura o incident
        .where('id', id)
        .select('ong_id')
        .first();

       if (incident.ong_id !== ong_id) {
           return response.status(401).json({ error: 'Operação não permitida!'});
       }
       
       await connection('incidents').where('id', id).delete();

       return response.status(204).send();
    }

}; 