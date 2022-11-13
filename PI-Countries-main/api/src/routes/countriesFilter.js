
const {Country} = require('../db.js');
const {Op} = require('sequelize');

async function filters (req, res, next){
  try{

    let {filter, type, country} = req.query;

    if(filter){
      if(filter === "population"){
        if(country === "undefined"){
          const orderPopulation = await Country.findAll({
            attributes:['flag','name','population','ID'],
            order: [
              ['population', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
        else{
          country = country.split(",");
          const orderPopulation = await Country.findAll({
            attributes: ['flag','name','population','ID'],
            where: {
              name: {
                [Op.any]: country
              }
            },
            order: [
              ['population', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
      }

      if(filter === "name"){
        if(country === "undefined"){
          const orderPopulation = await Country.findAll({
            attributes:['flag','name','continent','ID'],
            order: [
              ['name', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
        else{
          country = country.split(",");
          const orderPopulation = await Country.findAll({
            attributes: ['flag','name','continent','ID'],
            where: {
              name: {
                [Op.any]: country
              }
            },
            order: [
              ['name', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
      }
    }

    next()

  }catch(error){
    next(error)
  }
}

module.exports = filters