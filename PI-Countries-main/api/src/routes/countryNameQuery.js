const {Country} = require("../db.js")
const {Op} = require("sequelize");


//Base para query
async function nameQuery (req, res, next){
  
  let {name} = req.query
  
  if(name){

    //TODO => Podria poner esta validacion al traer el dato, pasando la letra a minuscula
    name = name.split("");
    name[0] = name[0].toUpperCase();
    name = name.join("")
    
    let result = await Country.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`
        }
      }
    });  

    (result.length === 0) ? res.status(200).send("No se ha encontrado coincidencia con ningún país")
    : res.status(200).send(result);
    return;
    
  }

  res.status(400).send("No se ha introducido ningún país para la busqueda");
  

  /* let result = await Country.findAll({
    where: {
      capital: name
    }
  }) */
}
 
module.exports = {
  nameQuery
}