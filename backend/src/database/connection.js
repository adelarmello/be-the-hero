const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); // é a connection de desenvolvimento

module.exports = connection;