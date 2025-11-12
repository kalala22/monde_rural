/* eslint-disable @typescript-eslint/no-require-imports */
const { DataTypes } = require('sequelize')
const sequelize = require('../config/database_connection')

const Admin = sequelize.define(
  'Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
    },
    password: {
      // Correction ici : Utilisez DataTypes.STRING
      type: DataTypes.STRING,
      // Il est aussi recommandé de ne pas autoriser les mots de passe nuls
      allowNull: false,
    },
  },
  {
    tableName: 'admin',
    timestamps: false,
  },
)
console.log(Admin === sequelize.models.Admin)
module.exports = Admin
