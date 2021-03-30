const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const routes = require('./routes.js');

const app = express();

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Origin", "https://trello-board-app.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });

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
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database')
}).catch((err) => {
    console.log(err, 'error connecting to db');
});

app.use("", routes);

// For development (local db)
// mongoose.connect( MONGODB_URI, {
//     useUnifiedTopology: true 
// });
 
// Use static build files
// app.use(express.static('../../client/build'))
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname,  "../../client/build", "index.html"));
// });

app.use('/*', staticFiles)


// For development (Mongo db)
// mongoose.connect( uri, {
//     useNewUrlParser: true
// });

// app.use(express.static('App.js'))

const PORT = process.env.PORT || 3001;

app.set('port', PORT)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
