// DATABASE CONFIGURATION
const mongoose = require('mongoose')
const db = mongoose.connection
const mongodbURI = process.env.MONGODBURI || "mongodb://localhost:27017/bababa"
mongoose.connect(
    mongodbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
)
db.on('connected', () => console.log('DATABASE Mongoose connected, established at', mongodbURI))
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))