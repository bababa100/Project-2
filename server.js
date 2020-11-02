const express = require('express');
const app = express();
const router = require('express').Router();
const PORT = process.env.PORT || 3000;
const sellers = express.Router();
require('./db/db.js')


//Middleware
app.use(express.static('public'))
app.use('/css', express.static)

//ROUTES
//Index of Sellers 
app.get('/', async (req, res) => {

    res.render('sellers/index.ejs')
})

//New Sellers Route
app.get('/new', (req, res) => {
    res.render('sellers/new.ejs')
})


//Create Seller Route
router.post('/', (req, res) => {
    res.send('sellers/new')
})


app.listen(PORT, () => {
    console.log("Server is Listening!!!")
})