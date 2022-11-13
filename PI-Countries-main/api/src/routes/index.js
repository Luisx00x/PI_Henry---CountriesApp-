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

//RUTA NUEVA*
router.use('/countries/:country', countryId);

router.use('/countries', nameQuery);

router.use('/countries', filters)

router.use('/countries', countries); 


router.use('/activities', addActivities)

router.get('*', (req, res) => {
  console.log(req.url)
  res.status(404).send("RUTA NO VÁLIDA")
})

module.exports = router;
