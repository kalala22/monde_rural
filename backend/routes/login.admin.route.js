
import { Router } from 'express'
import { login } from '../controllers/admin.login.js'
// const { logout } = require('../controllers/admin.logout')
const router = Router()

router.post('/handle-login', login)
// router.get('/logout', logout)

export default router
