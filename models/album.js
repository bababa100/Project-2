const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    artist: {
        type: String,
        default: "",
        required: true

    },

    title: {
        type: String,
        default: "",

    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Album', albumSchema)