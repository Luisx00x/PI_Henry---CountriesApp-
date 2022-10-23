const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Activity',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificulty: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false            
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera')
        }
    },
    {
        freezeTableName: true
    });
};