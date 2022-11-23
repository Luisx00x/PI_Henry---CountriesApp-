const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {countries} = require('./countriesRoute.js');
const {nameQuery} = require('./countryNameQuery.js');
const {countryId} = require('./countryIdParams.js');
const {addActivities} = require("./addActivities.js");
const filters = require('./countriesFilter.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//RUTA NUEVA*  PASAR A GET Y PROBAR
router.get('/countries/:country', countryId);

router.get('/home', nameQuery);

router.get('/countries', filters);

router.get('/countries', countries); 

router.post('/activities', addActivities)

router.get('*', (req, res) => {
  console.log(req.url)
  res.status(404).send("RUTA NO VÁLIDA")
})

module.exports = router;
