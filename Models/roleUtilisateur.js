const sequelize = require('../Database/databaseSequelize');
const { DataTypes } = require('sequelize');

const RoleUtilisateur = sequelize.define('roleUtilisateur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    utilisateur_id: {
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

module.exports = RoleUtilisateur;