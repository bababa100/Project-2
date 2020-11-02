const {
    Router
} = require('express');
const express = require('express')
const router = express.Router();
const Seller = require('../models/seller.js');


//ROUTES
//Index of Sellers 
router.get('/', (req, res) => {

    let allSellers = Seller.find()
    res.render('sellers/index.ejs', {
        seller: allSellers
    })
})

//New Sellers Route
router.get('/new', (req, res) => {
    //res.render('sellers/new.ejs')
    res.send("This is new page")
})

//CREATE
router.post('/', async (req, res) => {
    try {

        let seller = await Seller.create(req.body);
        //res.redirect(`/sellers/${seller.id}`);
        console.log(seller);
        res.send(seller);

    } catch (err) {

        res.send(err)
    }

});

//Show
router.get('/:id', (req, res) => {

    res.send('The show route works')
})

//EDIT

router.get('/:id/edit', (req, res) => {
    res.send("The edit page works");
})

//UPDATE/POST
router.put('/:id', (req, res) => {
    res.send("This is for update");
})

//DESTROY/DELETE

router.delete('/:id', (req, res) => {
    res.send("The destroy routes work");

})







//POST Form submission.  Push new seller to database.  Redirect to index

// router.post('/', (req, res) => {
//     res.send("I may need some help with this");
// });

// router.put('/:sellerId/albums', async (req, res) => {
//     let foundSeller = await Seller.findByIdAndUpdate(
//         req.params.sellerId, {
//             $push: {
//                 albums: req.body.albums,
//             },
//         }, {
//             new: true,
//             upsert: true
//         }
//     );

module.exports = router