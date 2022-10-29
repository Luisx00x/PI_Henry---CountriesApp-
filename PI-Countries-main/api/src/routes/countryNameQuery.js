const {Country} = require("../db.js")
const {Op, Sequelize} = require("sequelize");


//Base para query
async function nameQuery (req, res, next){
  
  try{

    let {name} = req.query
  
    if(name){

      //TODO => Podria poner esta validacion al traer el dato, pasando la letra a Minuscuilas
      /* name = name.split("");
      name[0] = name[0].toUpperCase();
      name = name.join("") */
      
      let result = await Country.findAll({
        
        /* attributes: {
          exclude: ['nameTranslations']
        }, */
        
        where: {

          //TODO Codigo que funciona para español e ingles
          [Op.or]:{
            
            name: {
              [Op.like] : `${name}%`
            },

            nameTranslations: {
              [Op.like]: `${name}%`
            }

          }
          //TODO

          //! ESTE FUNCIONA CASI PERFECTO PARA USAR TODOS LOS IDIOMAS
          /* [Op.or]:{
            
            name: {
              [Op.like] : `${name}%`
            },

            nameTranslations: {
              [Op.substring]: `${name}`
            }

          } */

          
          //?FUNCIONAL PERO NO TOMA LOS nameTrasnlations QUE NO MATCHEAN
          /* [Op.or]:{
            name: {
              [Op.like]: `${name}%`
            },
            nameTranslations: {
              [Op.contains]: [name]
            }
          } */

          //IDEA
         /*  [Op.contains]: {
            [Op.like]: [`${name}%`]
          } */

          //!Cuando buscaba con el name
          /* name: {
            [Op.like]: `${name}%`
          } */

          //nameTranslations: {

          //!SOLO MATCHEA EXACTO
            //[Op.contains]: [name]

            //!PARA QUE PUEDA FUNCIONAR, LIKE DEBERIA RECORRER EL ARREGLO
            /* [Op.or]: {
              [Op.like]: `${name}%`,
              [Op.contains]: [name]
            } */

          //}

        }
      });  

      (result.length === 0) ? res.status(200).send("No se ha encontrado coincidencia con ningún país")
      : res.status(200).send(result);
      return;
      
    }

  throw new Error("No se ha introducido ningún país para la busqueda");
    
  }catch(error){
    next(error);
  }
  

  /* let result = await Country.findAll({
    where: {
      capital: name
    }
  }) */
}
 
module.exports = {
  nameQuery
}