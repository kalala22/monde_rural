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
    email_address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
  },
  {
    tableName: 'admin',
    timestamps: false,
  },
)
console.log(Admin === sequelize.models.Admin)
module.exports = Admin
