const knex = require('knex');

const db = process.env.DB_ENV || "development"; // Setup for deployment on heroku
const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);