require("dotenv").config();
const connection = require("knex")({
  client: "pg", // Use 'pg' for PostgreSQL
  connection: {
    host: process.env.DB_HOST, // your PostgreSQL host
    port: process.env.DB_PORT, // PostgreSQL port (default is 5432)
    user: process.env.DB_USER, // PostgreSQL user
    password: process.env.DB_PASSWORD, // PostgreSQL password
    database: process.env.DB_DATABASE, // PostgreSQL database
  },
});
module.exports = connection;
