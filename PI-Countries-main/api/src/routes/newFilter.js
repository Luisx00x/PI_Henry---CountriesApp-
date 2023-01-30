
const { Op } = require("sequelize");
const {Country} = require("../db.js");


async function filtro (req, res, next){
  
  try{
      const CountriesFilter = await Country.findAll({
        where:{
          ['population'] : {
            [Op.lte]: 1000
          }
        }
      });

      res.json(CountriesFilter)

  }catch(error){
    
    next(error)
  }
}

module.exports = {
  filtro
}