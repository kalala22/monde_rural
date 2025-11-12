/* eslint-disable @typescript-eslint/no-require-imports */
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
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

app.use('/api/', require('./routes/form.create.route'))
app.use('/api/', require('./routes/login.admin.route'))

module.exports = app
