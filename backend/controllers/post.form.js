import prisma from '../prisma/client.js'
// import { ValidationError } from 'sequelize'

export async function postCreateForm(req, res) {
  console.log('--- REQUÊTE REÇUE DANS postCreateForm ---', req.body)
  const idAdminParDefaut = process.env.DEFAULT_ADMIN_ID
    ? parseInt(process.env.DEFAULT_ADMIN_ID)
    : null

  try {
    const { nom, postnom, prenom, email, membershipType, message, telephone } = req.body

    // Vérifier si un utilisateur non vérifié existe déjà avec cet email
    const existingUser = await prisma.users.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ message: 'Cette adresse email est déjà utilisée.' })
    }

    const newUser = await prisma.users.create({
      data: {
        nom: nom.trim().charAt(0).toUpperCase() + nom.trim().slice(1),
        postnom: postnom.trim().charAt(0).toUpperCase() + postnom.trim().slice(1),
        prenom: prenom.trim().charAt(0).toUpperCase() + prenom.trim().slice(1),
        email: email.trim(),
        telephone: telephone.trim(),
        type_adhesion: membershipType,
        message: message.trim(),
        date_adhesion: new Date(),
        admin_id: idAdminParDefaut,
      },
    })

    return res.status(201).json({
      message: 'Formulaire envoyé avec succès !',
      userId: newUser.id,
    })
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error)

    // Si l'erreur est une erreur de validation de Sequelize (ex: email invalide, champ manquant)
    // if (error instanceof ValidationError) {
    //   return res.status(400).json({
    //     message: 'Les données fournies sont invalides.',
    //     // Renvoie les détails spécifiques de l'erreur de validation
    //     errors: error.errors.map((e) => ({ field: e.path, message: e.message })),
    //   })
    // }

    // Pour toutes les autres erreurs (ex: problème de connexion à la DB)
    return res.status(500).json({
      message: 'Une erreur interne est survenue.',
      error: 'Impossible de traiter la demande pour le moment.',
    })
  }
}
// No default export; using named export "postCreateForm"
