const express = require('express')
const connectDB = require('./config/db')
const app = express()

connectDB()

app.get('/', (req, res) => {
  res.json({
    status: "OK",
    message: "Welcome to Coding Club"
  })
})

app.get('/profile', (req, res) => {
  res.json({
    status: "OK",
    message: "Welcome to Profile Page"
  })
})

module.exports = app
