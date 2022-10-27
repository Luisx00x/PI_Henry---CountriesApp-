const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {countries} = require('./countriesRoute.js');
const {nameQuery} = require('./countryNameQuery.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);  //!Revisar

//! ACOMODAR LA RUTA BIEN! ESta ruta eS:  "/countries/name"
router.use('/name', nameQuery);

router.get('*', (req, res) => {
  console.log(req.url)
  res.status(404).send("RUTA NO VÁLIDA")
})

module.exports = router;
