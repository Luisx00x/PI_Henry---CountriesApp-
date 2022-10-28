 const {Country} = require("../db.js")

 //TODO Falta que se traiga la información de actividades turisticas correspondiente

 async function countryId (req, res, next){

  let {country} = req.params; 

  let details = await Country.findByPk(country);

  (!details) ? res.status(400).send("BAD REQUEST") : res.send(details);

 }

 module.exports = {
  countryId
 }