const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
 
  sequelize.define('country', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //!Ejemplo de set
      //!DATO el set se puede usar para hashear contraseñas
      //*Como asignar un set con una funcion autoinvocada
      /* set(value){
        this.setDataValue('name', ((val) => {
          let newValue = val.split("");
          newValue[0] = newValue[0].toLowerCase();
          return newValue = newValue.join("")
        })(value))
      } */
    },
    nameTranslations: {
      //TODO codigo que funciona para español e ingles
      type: DataTypes.STRING
      //TODO
      //PASANDOLE UN EL ARREGLO Y CONVETIDO A STRING AQUI (TIENE QUE SER TEXT PORQUE ES UN STRING LARGO)
      /* type: DataTypes.TEXT,
      set(obj){
        const val = obj
        this.setDataValue('nameTranslations', val.join(", "));
      } */
    
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false     
    },
    sub_region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
      get(){
        return `${this.getDataValue('area')} Km²`;
      }
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get(){
        return `${this.getDataValue('population')} habitantes`
      }
      //* Aqui no podía usar un set() para hacer esto porque la db recibe un entero
    },
    /* names: {
      type: DataTypes.VIRTUAL,
      get(){
        const val = this.nameTranslations;
        return val.join(", ")
      }
    } */
  }
  //* Options
  ,{
    freezeTableName: true,
    timestamps: false
  });
};
