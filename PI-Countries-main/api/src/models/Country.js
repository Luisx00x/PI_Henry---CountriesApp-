const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
 
  sequelize.define('country', {

    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        is: {
          args: /\w\w\w/,
          msg: "El ID debe estar compuesto por un código de 3 letras relacionados al pais"
        }
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: {
        args: true,
        msg: "El nombre del pais solo puede contener letras"
      }
    },

    nameTranslations: {
      type: DataTypes.STRING
      },

    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: "El valor de la bandera debe ser una url"
        }
      }
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "El continente debe estar en valores alfabeticos"
        }
      }
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /\w*\s?/g,
          msg: "La capital debe estar en valores alfabeticos"
        }
      }    
    },

    sub_region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /\w*\s?/g,
          msg: "La capital debe estar en valores alfabeticos"
        }
      }    
    },
    
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
      get(){
        return `${this.getDataValue('area')} Km²`;
      },
      validate: {
        is: {
          args: /\d*/g,
          msg: "El valor del area del pais debe ser un float"
        }
      }

    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get(){
        return `${this.getDataValue('population')} habitantes`
      },
      validate:{
        is: {
          args: /\d/g,
          msg: "El valor de la población del pais debe ser un numero"
        }
      }
    },

  }
  //* Options
  ,{
    freezeTableName: true,
    timestamps: false
  });
};
