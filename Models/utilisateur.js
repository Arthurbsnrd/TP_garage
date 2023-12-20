const sequelize = require('../Database/databaseSequelize');
const { DataTypes } = require('sequelize');

const Utilisateur = sequelize.define('utilisateur', {
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
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true
});

module.exports = Utilisateur;