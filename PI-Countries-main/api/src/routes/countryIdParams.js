 const {Country} = require("../db.js")
 const {Activity} = require("../db.js")

 async function countryId (req, res, next){

  try{

    let {country} = req.params; 

    let details = await Country.findByPk(country,{
      include:[{
        model: Activity
      }]
    });

    if(details) return res.status(200).send(details);

    return res.send("No se encontraron detalles del pais");

  }catch(error){
    next(error);
  }

 }

 module.exports = {
  countryId
 }