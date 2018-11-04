const environment = process.env.ENVIRONMENT || 'development';
//check if i have an environment set, if not use 'development'

const config = require('../knexfile')[environment];

module.exports = require('knex')(config);
//this is an instance of the connection to the database
// requiring connection to the database