const {
    Router
} = require('express');
const express = require('express');
const Album = require('../models/album.js');
const router = express.Router();

// ALL ALBUMS ROUTE
router.get('/', (req, res) => {
    res.send("Show Album list")
})

//CREATE NEW ALBUM FORM
router.get('/new', (req, res) => {
    res.send("Create Album Form Route Ran")
});

//CREATE A NEW ALBUM
router.post('/', (req, res) => {
    res.send("Create a new album route")
});

module.exports = router;