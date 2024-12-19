

require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./src/config/database");
app.use(express.json());
pool.connect()
  .then(() => console.log('Conexión exitosa'))
  .catch(err => console.error('Error de conexión:', err.stack));
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
module.exports = app;


module.exports = pool;
