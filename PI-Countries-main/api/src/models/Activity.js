const { DataTypes } = require('sequelize');


module.exports = sequelize => {
    sequelize.define('Activity',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                    validateSpaces: function (value) {
                        if(!/^\S/m.test(value) || (!/\S$/gm.test(value))){
                            throw new Error ('ERROR: No se permiten espacios en blanco al inicio ni al final')
                        }
                    },
                    not: {
                        args: /[^A-Za-zÑ-ñ- ]/,
                        msg: "ERROR: El nombre de la actividad no debe tener simbolos"
                    }
            }
        },
        dificulty: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['1','2','3','4','5']],
                    msg: "La dificultad no puede estar fuera de los valores establecidos"
                }
            }            
        },
        duration: {
            type: DataTypes.INTEGER,
   //         unique: 'relationActivitiy',
            allowNull: false,
            validate: {
                isNumeric: true
            },
            get(){
                return `${this.getDataValue('duration')} horas`
            }
        },
        season: {
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['Verano','Primavera','Invierno','Otoño']],
                    msg: "Estación no existente"
                }
            }
        },
        searchName : {
            type: DataTypes.VIRTUAL,
            get(){
                return `${this.name} DIF:${this.dificulty}`
            }
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: "Agregado en",
        updatedAt: "Actualizada"
    });
};