// require the necessary libraries
const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
const List = require('./models/listSchema.js');
const Card = require('./models/cardSchema.js');

async function seedListsDB() {
    // Connection URL
    const uri = 'mongodb://localhost:27017/trello';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    try {
        await client.connect();

        console.log("Connected correctly to server");
        const collection = client.db("trello").collection("lists");
        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        let listArray = [];

        // Create 1000 list mongoose objects
        for (i = 1; i < 4; i++) {
            let listName = 'To Do';

            if (i === 2) {
                listName = 'Doing';
            }
            if (i === 3) {
                listName = 'Finished';
            }

            var list = new List({
                list_id: i,
                list_name: listName,
                position: i,
                _cards: []
            });
            console.log(list);
            // Add the newly created list to the lists array
            listArray.push(list);
        }
        collection.insertMany(listArray);
        console.log("Lists seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}
seedListsDB();



async function seedCardsDB() {
    // Connection URL
    const uri = 'mongodb://localhost:27017/trello';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    try {
        await client.connect();

        console.log("Connected correctly to server");
        const collection = client.db("trello").collection("lists");
        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        // collection.drop();

        for (let i = 1; i < 4; i++) {
            let cardArray = [];
    
                // Create 3 card mongoose objects
                for (let i = 1; i < 4; i++) {
                    let cardName = 'Task A';
    
                    if (i === 2) {
                        cardName = 'Task B';
                    }
                    if (i === 3) {
                        cardName = 'Task C';
                    }
    
                    var card = new Card({
                        card_id: i,
                        card_name: cardName,
                        position: i
                    });
                    console.log(card);
    
                    // Add the newly created card to the cards array
                    cardArray.push(card);
                }
            collection.updateOne(
                { "list_id": i },
                { $set: { "_cards": cardArray} },
                { upsert: true}
            );
        }
        console.log("Cards seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedCardsDB();
