const axios = require("axios")
const {Country} = require("../db.js")

async function countries (req, res, next) {
  try{
    let prueba = await axios('https://restcountries.com/v3/all')
    //? Funciona perfect
    //TODO Refactorizar si me queda tiempo
    .then( response => response.data.map( ele => {
      return {
        ID: ele.cca3,
        name: ele.name.common,
        flag: ele.flags[0],
        continent: ele.continents[0],
        capital: ele.capital,
        sub_region: ele.subregion,
        area: ele.area,
        population: ele.population
      }
    }))
    .then( response => response.forEach( ele => {
     /*  if(ele.capital) ele.capital = ele.capital[0]
      else ele.capital = "undefined" */
      if(!ele.sub_region) ele.sub_region = "undefined"
      return Country.create({
        ID: ele.ID,
        name: ele.name,
        flag: ele.flag,
        continent: ele.continent,
       // capital: ele.capital,
        sub_region: ele.sub_region,
        area: ele.area,
        population: ele.population
      })
    }))
    //!PARA PRUEBAS
    /* .then(response => response.data.map( ele => {
      if(ele.capital) return ele.capital[0]
      else return "no tiene"
    })) */
    .then(response => res.status(200).send(response))
    //.then( response => res.status(200).json(response.data))
  }catch(error){
    next(error)
  }
}

module.exports = {
  countries
}