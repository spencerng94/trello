const credentials = require('./credentials.js');
const uri = `mongodb+srv://spencer:${credentials}@cluster0.ahwfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/trello";

var mongoose = require('mongoose');
// const database = mongoose.connect('mongodb://localhost/trello', { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'trello';

// Use connect method to connect to the server
const database = MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

module.exports = database;