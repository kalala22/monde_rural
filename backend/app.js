/* eslint-disable @typescript-eslint/no-require-imports */

const express = require('express')
const app = express()
const Users = require('./models/Users')
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.post('/api/send-form', (req, res) => {
  const { nom, postnom, prenom, email, membershipType, message } = req.body
  const idAdminParDefaut = 1
  Users.create({
    nom,
    postnom,
    prenom,
    email,
    type_adhesion: membershipType,
    message,
    admin_id: idAdminParDefaut,
  })
    .then(() => res.status(201).json({ message: 'Formulaire envoyé avec succès !' }))
    .catch((error) => {
      // Affichez l'erreur complète dans la console de votre serveur
      console.error("Erreur lors de la création de l'utilisateur:", error)

      // Envoyez une réponse d'erreur plus détaillée au frontend
      res.status(400).json({
        message: 'Impossible de traiter la demande.',
        error: error.message, // Envoie un message d'erreur plus lisible
      })
    })
})

module.exports = app
