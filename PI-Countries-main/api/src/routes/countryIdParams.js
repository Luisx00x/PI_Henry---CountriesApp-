 const {Country} = require("../db.js")

 async function countryId (req, res, next){

  let {country} = req.params; 

  let details = await Country.findByPk(country);

  (!details) ? res.status(400).send("BAD REQUEST") : res.send(details);

 }

 module.exports = {
  countryId
 }