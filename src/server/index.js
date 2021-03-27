const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const credentials = require('../database/credentials.js');
const cors = require('cors')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = require('./routes.js');

const { ObjectID } = require('bson');

const app = express();

const PORT = process.env.PORT || 3001;

app.set('port', PORT)

app.use(cors({ origin: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'));

const MONGODB_URI = `mongodb+srv://spencer-2:vcAkCsQyQzH92uM@cluster0.ahwfc.mongodb.net/trello?retryWrites=true&w=majority`

const uri = process.env.MONGODB_URI;

// // For production
// if (process.env.NODE_ENV === "production") {
//     // Connect to Mongo
//     mongoose.connect(MONGODB_URI || "mongodb://localhost/trello", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to database')
// }).catch((err) => 
//     console.log(err, 'error connecting to db'));

//     // Use static build files
//     app.use(express.static('../../build'))
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname,  "../../build", "index.html"));
//     });
// } 

// For production
    // Connect to Mongo
mongoose.connect(uri || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database')
}).catch((err) => {
    console.log(err, 'error connecting to db');
});
 
// Use static build files
app.use(express.static('../../build'))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "../../build", "index.html"));
});

// For development (local db)
// mongoose.connect( "mongodb://localhost/trello", {
//     useNewUrlParser: true
// });

// For development (Mongo db)
// mongoose.connect( uri, {
//     useNewUrlParser: true
// });

// app.use(express.static('App.js'))

// app.use(express.static(path.join(__dirname, '../../build')));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
