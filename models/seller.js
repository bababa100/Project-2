const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    albums: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    },

});

module.exports = mongoose.model('Seller', sellerSchema);