const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('./db/db.js')

app.get('/', (req, res) =>
    res.send("Ready to Rock"))


app.listen(PORT, () => {
    console.log("Server is Listening!!!")
})