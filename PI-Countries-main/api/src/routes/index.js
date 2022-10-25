const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {countries} = require('./countries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);  //!Revisar

/* router.get('/countries', (req, res) => {
  res.send("Esto es una prueba")
}) */

router.get('*', (req, res) => {
  console.log(req.url)
  res.status(404).send("RUTA NO VÁLIDA")
})

module.exports = router;
