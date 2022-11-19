const {Activity} = require('../db.js');
const {Op} = require('sequelize');
const {Country} = require('../db.js');

async function addActivities (req, res, next){
  try{
  
    let {name, dificulty, duration, season, countryAsociations} = req.body;

    console.log(req.body, "BODY DENTRO DE LA RUTA")

    if(name && dificulty && duration && season && countryAsociations.length>0){

      const verification = await Country.findAll({
        where: {
            ID:{
              [Op.any]: countryAsociations
          }
        }
      });

      if(verification.length === 0) throw new Error("No se encuentra el país en la base de datos"); 

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
          await newActivity.addCountry(countryAsociations)
          return res.status(200).send("Done!")
      }
      
      searchActivity.addCountry(countryAsociations);
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