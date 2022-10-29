 const {Country} = require("../db.js")

 //TODO Falta que se traiga la información de actividades turisticas correspondiente

 async function countryId (req, res, next){

  try{

    let {country} = req.params; 

    let details = await Country.findByPk(country);

  //  (!details) ? res.status(400).send("BAD REQUEST") : res.send(details);

    if(details) return res.send(details);

    throw new Error("BAD REQUEST");

  }catch(error){
    next(error);
  }

 }

 module.exports = {
  countryId
 }