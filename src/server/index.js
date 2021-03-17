const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const credentials = require('../database/credentials.js');
const cors = require('cors')
const path = require('path');

const List = require('../database/models/listSchema.js');
const Card = require('../database/models/cardSchema.js');
const { ObjectID } = require('bson');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const MONGODB_URI = `mongodb+srv://spencer-2:vcAkCsQyQzH92uM@cluster0.ahwfc.mongodb.net/trello?retryWrites=true&w=majority`

const uri = process.env.MONGODB_URI;

// For production
mongoose.connect(uri || "mongodb://localhost:27017/trello", {
    useNewUrlParser: true
});
app.use(express.static(path.join(__dirname, '../../build')));

// For development
// mongoose.connect( "mongodb://localhost/trello", {
//     useNewUrlParser: true
// });
// app.use(express.static("public"));

// app.use(express.static('App.js'))


app.set('port', PORT)


// Get All Lists
app.get("/api/lists", async (request, response) => {
    try {
        var result = await List.find();
        console.log('result from getLists:', result);
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


// Add List 
app.post("/api/lists/:id", async (request, response) => {

    let newId = parseInt(request.params.id);

    let insertObject = {
        list_id: newId,
        list_name: "New List",
        position: newId
    }

    try {
        var result = await List.create(insertObject);
        console.log('result from post:', result);
        response.send(result);
    } catch (error) {
        console.log(error, 'line 55')
        response.status(500).send(error);
    }
})

// Delete List
app.delete("/api/lists/:id", async (request, response) => {

    try {
        var result = await List.deleteOne({list_id: `${request.params.id}`}).exec();
        console.log('result from delete:', result);

        response.send(result);
    } catch (error) {
        console.log(error, 'line 55')
        response.status(500).send(error);
    }
});

// Patch List Name
app.patch("/api/lists/:id", async (request, response) => {
    let newName = request.body.listTitle;
    let currentId = request.body.listId;

    let updateQuery = {
        list_id: currentId
    }
    let updateObject = {
        list_id: currentId,
        list_name: newName
    }

    try {
        var result = await List.updateOne(updateQuery, updateObject);
        console.log('result from patch:', result);
        response.send(result);
    } catch (error) {
        console.log(error, 'line 55')
        response.status(500).send(error);
    }
});


// Get Cards
app.get('/api/cards', async (req, res) => {

    try {
        var result = await List.aggregate([{
            $unwind: '$_cards'
        }])
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add Card by List Id 
app.post("/api/cards/:id", async (request, response) => {
    let newId = new Card({
        card_id : request.body.params.cardId,
        list_id : request.body.params.listId,
        card_name: request.body.params.cardName,
        position: request.body.params.position 
    })

    let updateQuery = {
        "list_id": request.body.params.listId
    }

    try {
        var result = await List.updateOne(
            updateQuery,
            { 
                "$push": { 
                    "_cards": newId 
                }
            }
        )
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
})

// Delete Card by List Id and Card Id
app.delete("/api/cards/:id", async (request, response) => {
    let deleteQuery = {
        "list_id": parseInt(request.query.listId),
    }

    let deleteObject = {
        "card_id" : parseInt(request.query.cardId),
    }

    try {
        var result = await List.updateOne(
            deleteQuery,
            { 
                "$pull": { 
                    "_cards": deleteObject
                }
            }
        )

        console.log('result from delete:', result);

        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Patch Card Name
app.patch("/api/cards/:id", async (request, response) => {
    let updateQuery = {
        "list_id": request.body.listId,
        "_cards.card_id": request.body.cardId
    }

    let updateObject = {
        list_id: request.body.listId,
        card_id: request.body.cardId,
        card_name: request.body.cardTitle
    }

    try {
        var result = await List.updateOne(updateQuery, 
            {
                "$set": {
                    "_cards.$": updateObject
                }
            }    
        );
        console.log('result from patch:', result);
        response.send(result);
    } catch (error) {
        console.log(error, 'line 55')
        response.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

