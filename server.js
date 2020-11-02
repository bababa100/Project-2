const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sellerController = require('./controllers/sellerController');
require('./db/db.js')


//Middleware
app.use(express.static('public'))
app.use('/sellers', sellerController);
app.use(express.urlencoded({
    extended: false
}));






app.listen(PORT, () => {
    console.log("Server is Listening!!!")
});