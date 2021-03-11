import credentials from './credentials.js';
import MongoClient from "mongodb";

const databaseName = "trello";
const uri = `mongodb+srv://spencer:${credentials}@cluster0.ahwfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

var url = "mongodb://localhost:27017/trello";

const database = MongoClient.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, (error, client) => {
    if (error) {
      return console.log("Connection failed for some reason");
    }
    console.log("Connection established - All well");
    const db = client.db(databaseName);

    client.close();
});

export default database;