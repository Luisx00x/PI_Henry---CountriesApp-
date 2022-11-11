const {Activity} = require('../db.js');
const {Op} = require('sequelize');
const {Country} = require('../db.js');

async function addActivities (req, res, next){
  try{
  
    let {name, dificulty, duration, season, countryAsociation} = req.body;

    if(name && dificulty && duration && season && countryAsociation.length>0){

      const verification = await Country.findAll({
        where: {
            ID:{
              [Op.any]: countryAsociation
          }
        }
      });

      if(verification.length === 0) throw new Error("No hay paises cargados en la base de datos"); 

      const searchActivity = await Activity.findOne({
        where:{
          name: {
            [Op.like]: name
          }
        },
        include: Country
      })

      if(!searchActivity){
          const newActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season
          });
          await newActivity.addCountry(countryAsociation)
          return res.status(200).send("Done!")
      }
      
      searchActivity.addCountry(countryAsociation);
      return res.send("DONE DONE DONE")
    }

    throw new Error("Activity post: Bad request")

  }catch(error){
    next(error);
  }
}

module.exports = {
  addActivities
}