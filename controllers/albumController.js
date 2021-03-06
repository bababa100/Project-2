const express = require('express');
const Album = require('../models/album.js');
const Seller = require('../models/seller.js');
const router = express.Router();

//Index of Albums 
router.get('/', async (req, res) => {

    let allAlbums = await Album.find()
    res.render('albums/index.ejs', {
        albums: allAlbums
    })
})

//DISPLAY NEW ALBUM FORM
router.get('/new', (req, res) => {
    console.log("req.query.sellerId,", req.query);
    res.render("albums/new.ejs", {
        sellerId: req.query.sellerId
    })

});

// SHOW ALL ALBUMS ROUTE
router.get('/:id', async (req, res) => {

    let foundAlbum = await Album.findById(req.params.id);
    res.render("albums/show.ejs", {
        album: foundAlbum
    });
    //res.send(foundAlbum);

    console.log("Album Show Route hit");
});



//CREATE A NEW ALBUM ROUTE
router.post('/', async (req, res) => {
    // try {
    //     let album = await Album.create(req.body);

    //     let foundSeller = await Seller.findById(req.params.id);
    //     foundSeller.albums.push(album._id);
    //     await foundSeller.save();
    //     console.log("Found Seller", foundSeller);
    //     res.redirect(`/albums/${album.id}`);
    //     //res.send(album);

    // } catch (err) {
    //     res.send(err)
    // }
    console.log(req.body);
    try {
        let album = await Album.create(req.body);
        res.redirect(`/albums/${album.id}`);
        //res.send(album);

    } catch (err) {
        res.send(err)
    }
});
//UPDATE
router.put('/:id', async (req, res) => {
    await Album.findByIdAndUpdate(req.params.id, req.body)
    //res.redirect(`/albums/${req.params.id}`)
    res.send("I am ready to update album")
})
//DESTROY/DELETE

router.delete('/:id', async (req, res) => {
    await Album.findByIdAndDelete(req.params.id);
    res.redirect('/albums');
    //res.send("I am ready to delete")

})

module.exports = router;