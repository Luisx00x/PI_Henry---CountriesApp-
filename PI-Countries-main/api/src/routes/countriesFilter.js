
const {Country} = require('../db.js');
const {Op} = require('sequelize');
const {Activity} = require("../db.js")

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
          const orderName = await Country.findAll({
            attributes:['flag','name','continent','ID'],
            order: [
              ['name', type]
            ]
          })
          return res.status(200).json(orderName)
        }

        else{
          value = value.split(",");
          const orderName = await Country.findAll({
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
          return res.status(200).json(orderName)
        }
      }

      if(filter === "activities"){
        if(value !== "undefined"){

          let modification = value.split(" DIF:");

          const orderActivities = await Activity.findAll({
            attributes: ["name"],
            include: {
              model: Country, attributes: ['name','capital','continent','ID','flag']
            },
            where: {
              ['name']:[modification[0]],
              ['dificulty']: [modification[1]]
            }
          })
          return res.status(200).json(orderActivities)
        }
      }
    }   
    next()

  }catch(error){
    next(error)
  }
}

module.exports = filters