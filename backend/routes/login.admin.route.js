/* eslint-disable @typescript-eslint/no-require-imports */
const { Router } = require('express')
const { login } = require('../controllers/admin.login')
// const { logout } = require('../controllers/admin.logout')
const router = Router()

router.post('/handle-login', login)
// router.get('/logout', logout)

module.exports = router
