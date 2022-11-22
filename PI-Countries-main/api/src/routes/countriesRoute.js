const axios = require("axios")
const {Country} = require("../db.js")
const {Activity} = require("../db.js")

//TODO PODRIA CAMBIARLO POR UN FINDORCREATE PARA EVITAR LA DUPLICIDAD Y LOS PROBLEMAS DE COLISION.

async function countries (req, res, next) {
  try{
    
    let externalApiCall = await axios('https://restcountries.com/v3/all');

    let map = externalApiCall.data.map( async el => {
      
      const verification = await Country.findByPk(el.cca3);

      if(!verification){      
          await Country.create({
            ID: el.cca3,
            name: Object.entries(el.translations).find( i => i[0] === "spa" ).pop().common,
            flag: el.flags[0],
            continent: el.region,
            capital: String(el.capital),
            sub_region: String(el.subregion),
            area: el.area,
            population: el.population,
            nameTranslations: el.name.common
          })

        }

      })

    await Promise.all(map);

    const findData = await Country.findAll({
      attributes:['flag','name','continent','ID']
    });

    let options = await Activity.findAll({
      attributes: ['name']
    })

   res.status(200).json({findData,options})

  }catch(error){
    next(error)
  }
  
}

module.exports = {
  countries
}