import { Router } from 'express'
import { getAllResources } from '../controllers/get.resources.js'
const router = Router()

router.get('/resources', getAllResources)

export default router
