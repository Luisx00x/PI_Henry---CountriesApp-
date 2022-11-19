const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Activity',{
        name: {
            type: DataTypes.STRING,
            unique: 'relationActivitiy',
            allowNull: false
        },
        dificulty: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            unique: 'relationActivitiy',
            allowNull: false            
        },
        duration: {
            type: DataTypes.INTEGER,
            unique: 'relationActivitiy',
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera')
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: "Agregado en",
        updatedAt: "Actualizada"
    });
};