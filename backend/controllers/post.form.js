import Users from '../models/Users.js'
import { ValidationError } from 'sequelize'

export async function postCreateForm(req, res) {
  const idAdminParDefaut = process.env.DEFAULT_ADMIN_ID

  try {
    const { nom, postnom, prenom, email, membershipType, message } = req.body

    // Vérifier si un utilisateur non vérifié existe déjà avec cet email
    const existingUser = await Users.findOne({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ message: 'Cette adresse email est déjà utilisée.' })
    }

    const newUser = await Users.create({
      nom,
      postnom,
      prenom,
      email,
      type_adhesion: membershipType,
      message,
      admin_id: idAdminParDefaut,
    })

    return res.status(201).json({
      message: 'Formulaire envoyé avec succès !',
      userId: newUser.id,
    })
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error)

    // Si l'erreur est une erreur de validation de Sequelize (ex: email invalide, champ manquant)
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: 'Les données fournies sont invalides.',
        // Renvoie les détails spécifiques de l'erreur de validation
        errors: error.errors.map((e) => ({ field: e.path, message: e.message })),
      })
    }

    // Pour toutes les autres erreurs (ex: problème de connexion à la DB)
    return res.status(500).json({
      message: 'Une erreur interne est survenue.',
      error: 'Impossible de traiter la demande pour le moment.',
    })
  }
}
// No default export; using named export "postCreateForm"
