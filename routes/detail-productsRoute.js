const express = require('express')
const detailProductRoutes = express.Router()

detailProductRoutes.get("/", (req, res) => {
  res.sendFile('detail-products.html', { root: './public/views' })
})

module.exports = { detailProductRoutes }