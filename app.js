const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('./public'));
console.log(__dirname);
// const pathToPublicFolder = __dirname + '/public'

//Import Module Routes
const { homeRoutes } = require('./routes/homeRoute')
const { aboutRoutes } = require('./routes/aboutRoute')
const { productsRoutes } = require('./routes/productsRoute')
const { detailProductRoutes } = require('./routes/detail-productsRoute')


//Rute homepage
app.use("/", homeRoutes);

//Rute about
app.use("/about", aboutRoutes);

//Rute Products
app.use("/products", productsRoutes)

//Rute detail-products
app.use("/detailProducts", detailProductRoutes)



//Menjalankan Server
app.listen(PORT, () => {
    console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`)
  })



// app.get('/', (req, res) => {
//   console.log(__dirname)
//   res.sendFile('./public/views/home.html', { root: __dirname })
// })

//Rute about
// app.get('/about', (req, res) => {
//   console.log(__dirname)
//   res.sendFile('./public/views/about.html', { root: __dirname })
// })