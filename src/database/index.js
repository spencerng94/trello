// import credentials from './credentials.js';

// const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://spencer:${credentials}@cluster0.ahwfc.mongodb.net/trello?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const mongoose = require('mongoose');
// const mongoUri = 'mongodb://172.17.0.2/main-product';
const mongoUri = 'mongodb://localhost/main-product';

const db = mongoose.connect(mongoUri, {useMongoClient:true});

module.exports = db;
