import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import prisma from '../prisma/client.js'

config()
const JWT_SECRET = process.env.JWT_CODE

export async function login(req, res) {
  const { password, nom } = req.body
  try {
    const admin = await prisma.admin.findFirst({ where: { nom } })
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' })
    }

    if (admin.password !== password) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign(
      { userId: admin.id, nom: admin.nom }, // Données à inclure dans le token
      JWT_SECRET, // Clé secrète pour la signature
      { expiresIn: '24h' }, // Durée de validité du token
    )

    return res.status(200).json({ message: 'Login successful', adminId: admin.id, token: token })
  } catch (error) {
    console.error('Error during admin login:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
// No default export; using named export "login"
