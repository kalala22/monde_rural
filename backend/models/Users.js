import { DataTypes } from 'sequelize'
import Admin from './Admin.js'
import sequelize from '../config/database_connection.js'

const Users = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postnom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    type_adhesion: {
      type: DataTypes.ENUM('membre', 'partenaire', 'bénévole'),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
    },
    date_adhesion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Admin,
        key: 'id',
      },
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  },
)
console.log(Users === sequelize.models.Users)
export default Users
