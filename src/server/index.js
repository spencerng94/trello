const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static('App.js'))
app.set('port', PORT)

// Get All Cards
app.get('/api/cards', (req, res) => {
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});