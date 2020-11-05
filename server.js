const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sellerController = require('./controllers/sellerController');
const albumController = require('./controllers/albumController');
require('./db/db.js')


//Middleware
const methodOverride = require('method-override');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('public'));
//app.use('/css', express.static('public/css'))
app.use(methodOverride('_method'));
app.use('/sellers', sellerController);
app.use('/albums', albumController);
app.use(express.urlencoded({
    extended: false
}));







app.listen(PORT, () => {
    console.log("Server is Listening!!!")
});