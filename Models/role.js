const sequelize = require('../Database/databaseSequelize');
const { DataTypes } = require('sequelize');

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    admin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true
});

module.exports = Role;