
const {Country} = require('../db.js');
const {Op} = require('sequelize');
const {Activity} = require("../db.js")
const {conn} = require("../db.js")

async function filters (req, res, next){
  try{

    let {filter, type, value} = req.query;

    if(filter){
      if(filter === "population"){
        if(value === "undefined"){
          const orderPopulation = await Country.findAll({
            attributes:['flag','name','population','ID'],
            order: [
              ['population', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
        else{
          value = value.split(",");
          const orderPopulation = await Country.findAll({
            attributes: ['flag','name','population','ID'],
            where: {
              name: {
                [Op.any]: value
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
        if(value === "undefined"){
          const orderPopulation = await Country.findAll({
            attributes:['flag','name','continent','ID'],
            order: [
              ['name', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
        else{
          value = value.split(",");
          const orderPopulation = await Country.findAll({
            attributes: ['flag','name','continent','ID'],
            where: {
              name: {
                [Op.any]: value
              }
            },
            order: [
              ['name', type]
            ]
          })
          return res.status(200).json(orderPopulation)
        }
      }

      if(filter === "activities"){
        if(value !== "undefined"){
          const orderPopulation = await Activity.findAll({
            attributes: ["name"],
            include: {
              model: Country, attributes: ['name','capital','continent','ID','flag']
            },
            where: {
              ['name']:[value]
            }
          })
          return res.status(200).json(orderPopulation)
        }
      }
    }   next()

  }catch(error){
    next(error)
  }
}

module.exports = filters