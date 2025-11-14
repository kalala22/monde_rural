import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { postCreateForm } from '../controllers/post.form.js'
const router = Router()

const validationRules = [
  // Le nom ne doit pas être vide
  body('nom').trim().notEmpty().withMessage('Le nom est obligatoire.'),

  // L'email doit être un email valide
  body('email')
    .trim() // Enlève les espaces inutiles au début et à la fin
    .isEmail()
    .withMessage('Veuillez fournir une adresse email valide.')
    .normalizeEmail(), // Convertit l'email en format standard (ex: GMail.User@... -> gmail.user@...)

  // Le type d'adhésion doit être l'une des valeurs autorisées
  body('membershipType')
    .isIn(['membre', 'partenaire', 'benevole'])
    .withMessage("Le type d'adhésion est invalide."),
]
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // S'il y a des erreurs, renvoyer une réponse 400 avec les détails
    return res.status(400).json({ errors: errors.array() })
  }
  // S'il n'y a pas d'erreurs, passer au contrôleur suivant
  next()
}
router.post('/send-form', validationRules, handleValidationErrors, postCreateForm)

export default router
