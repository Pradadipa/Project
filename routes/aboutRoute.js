const express = require('express')
const aboutRoutes = express.Router()

aboutRoutes.get("/", (req, res) => {
  res.sendFile('about.html', { root: './public/views' })
})

module.exports = { aboutRoutes }