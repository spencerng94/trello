const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const db = require('../database/index.js');
const cors = require('cors')

const List = require('../database/models/listSchema.js');
const Card = require('../database/models/cardSchema.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/trello");

// app.use(express.static('App.js'))
app.set('port', PORT)

// Get All Lists
// app.get('/api/lists', (req, res) => {
//     List.find()
//         .then((data) => {
//             console.log(data, "logging lists data");
//             res.json(data);
//         }).catch((err) => console.log(err, 'err from app.get/lists'));
// });

// Get All Lists
app.get("/api/lists", async (request, response) => {
    try {
        var result = await List.find().exec();
        console.log('result:', result);
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Delete List
app.delete("/api/lists/:id", async (request, response) => {
    console.log(request.params, 'line 46')
    console.log(request.query, 'ine 47')
    // console.log(request, 'line 45')

    try {
        var result = await List.deleteOne({list_id: `${request.params.id}`}).exec();
        console.log('result from delete:', result);
        response.send(result);
    } catch (error) {
        console.log(error, 'line 55')
        response.status(500).send(error);
    }
});

// Get All Cards
app.get('/cards', (req, res) => {
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});