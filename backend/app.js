import { config } from 'dotenv'
import express from 'express'
import formCreateRoute from './routes/form.create.route.js'
import loginAdminRoute from './routes/login.admin.route.js'
import getResourcesRoute from './routes/get.resources.route.js'
config()
const app = express()
// const Users = require('./models/Users')
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

app.use('/api/', formCreateRoute)
app.use('/api/', loginAdminRoute)
app.use('/api/', getResourcesRoute)

export default app
