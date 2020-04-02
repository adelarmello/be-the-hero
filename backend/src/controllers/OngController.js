const crypto = require('crypto'); //lib pra gerar uma string aleatória(Nesse caso é pra gerar o ID(números e letras))
const connection = require('../database/connection');

module.exports = {
    async index (request, response){ //lista todos os dados da tabela
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres decimais(número e letras).
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};