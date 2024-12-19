const pool = require('./app'); // Asegúrate de que sea el archivo donde configuraste PostgreSQL.

pool.connect()
  .then(() => console.log('Conexión exitosa'))
  .catch(err => console.error('Error de conexión:', err.stack)); 