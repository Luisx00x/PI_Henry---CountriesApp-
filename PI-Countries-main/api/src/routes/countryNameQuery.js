const {Country} = require("../db.js")
const {Op} = require("sequelize");


async function nameQuery (req, res, next){
  
  try{

    let {name} = req.query
  
    if(name){
      
      let result = await Country.findAll({
        
        where: {

          [Op.or]:{
            
            name: {
              [Op.iLike] : `${name}%`
            },

            nameTranslations: {
              [Op.iLike]: `${name}%`
            }

          }
        }
      });  

      (result.length === 0) ? res.status(200).json("No se ha encontrado coincidencia con ningún país")
      : res.status(200).send(result);
      
      return;
      
    }

  next();
    
  }catch(error){
    next(error);
  }
  
}
 
module.exports = {
  nameQuery
}