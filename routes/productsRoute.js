const express = require('express')
const productsRoutes = express.Router()

productsRoutes.get("/", (req, res) => {
  res.sendFile('products.html', { root: './public/views' })
})

module.exports = { productsRoutes }