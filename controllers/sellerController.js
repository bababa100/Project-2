const express = require('express');
const router = express.Router();
const Seller = require('../models/seller.js');



//ROUTES
//Index of Sellers 
router.get('/', async (req, res) => {

    let allSellers = await Seller.find()
    res.render('sellers/index.ejs', {
        sellers: allSellers
    })
})

//New Sellers Route
router.get('/new', async (req, res) => {

    //res.render('sellers/new.ejs', {seller: new Seller()})
    res.send("This is new page")
})

//CREATE
router.post('/', async (req, res) => {
    // console.log(req);
    try {
        let seller = await Seller.create(req.body);
        res.redirect(`/sellers/${seller.id}`);
        //res.send(seller);

    } catch (err) {
        res.send(err)
    }
});
//Show
router.get('/:id', async (req, res) => {

    let foundSeller = await Seller.findById(req.params.id).populate('albums');
    res.send(foundSeller)
});



//EDIT
router.get('/:id/edit', (req, res) => {
    res.send("The edit page works");
})

//UPDATE
router.put('/:id', async (req, res) => {
    await Seller.findByIdAndUpdate(req.params.id, req.body)
    //res.redirect(`/sellers/${req.params.id}`)
    res.send("I am ready to update seller")
})

//DESTROY/DELETE

router.delete('/:id', async (req, res) => {
    await Seller.findByIdAndDelete(req.params.id);
    //res.redirect('/sellers');
    res.send("I am ready to delete")

});





module.exports = router