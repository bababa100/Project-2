const express = require('express');
const Album = require('../models/album.js');
const Seller = require('../models/seller.js');
const router = express.Router();

// SHOW ALL ALBUMS ROUTE
router.get('/:id', async (req, res) => {

    let foundAlbum = await Album.findById(req.params.id);
    res.send(foundAlbum)
});

//DISPLAY NEW ALBUM FORM
router.get('/new', (req, res) => {

    res.send("Create Album Form Route Ran")
});

//CREATE A NEW ALBUM ROUTE
router.post('/:id', async (req, res) => {
    try {
        let album = await Album.create(req.body);

        let foundSeller = await Seller.findById(req.params.id);
        foundSeller.albums.push(album._id);
        await foundSeller.save();
        console.log("Found Seller", foundSeller);
        res.redirect(`/albums/${album.id}`);
        //res.send(album);

    } catch (err) {
        res.send(err)
    }
});

//DESTROY/DELETE

router.delete('/:id', async (req, res) => {
    await Album.findByIdAndDelete(req.params.id);
    //res.redirect('/album');
    res.send("I am ready to delete")

});

module.exports = router;