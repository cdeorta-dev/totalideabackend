const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DBLOCAL_USER,
  host: process.env.DBLOCAL_HOST,
  database: process.env.DBLOCAL_DATABASE,
  password: process.env.DBLOCAL_PASSWORD,
  port: process.env.DBLOCAL_PORT,
});

module.exports = pool;
