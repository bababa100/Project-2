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

//Show
router.get('/:id', (req, res) => {
    Album.findById(req.params.id, (error, foundAlbum) => {
        res.render('albums/show.ejs', {
            album: foundAlbum
        })
    })
})

//POST

router.post('/', async (req, res) => {
    console.log(req.body);
    let Seller = await Seller.create(req.body);
    res.redirect(`/sellers/${seller.id}`);
});


app.listen(PORT, () => {
    console.log("Server is Listening!!!")
})