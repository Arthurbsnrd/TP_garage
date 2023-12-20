const sequelize = require('../Database/databaseSequelize');
const { DataTypes } = require('sequelize');

const RoleMarque = sequelize.define('roleMarque', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    marque_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true
});

module.exports = RoleMarque;