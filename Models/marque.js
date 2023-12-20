const sequelize = require('../Database/databaseSequelize');
const { DataTypes } = require('sequelize');

const Marque = sequelize.define('marque', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modele: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true
});

module.exports = Marque;