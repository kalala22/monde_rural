import { DataTypes } from 'sequelize'
import sequelize from '../config/database_connection.js'

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
export default Admin
