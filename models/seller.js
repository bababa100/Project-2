const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',

    }],

});

module.exports = mongoose.model('Seller', sellerSchema);