const {Country} = require("../db.js")
const {Op} = require("sequelize");


//Base para query
async function nameQuery (req, res, next){
  
  let {name} = req.query
  
  let result = await Country.findAll({
    where: {
      name: {
        [Op.substring]: name
      }
    }
  })

  /* let result = await Country.findAll({
    where: {
      capital: name
    }
  }) */

  res.status(200).json(result)
}
 
module.exports = {
  nameQuery
}