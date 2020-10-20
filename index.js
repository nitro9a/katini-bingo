const express = require('express'); 
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();  
const PORT = process.env.PORT || 5000; 

const mongoose = require ("mongoose"); 
const uristring = process.env.KATINI_DB_URI || 'mongodb://localhost/HelloMongoose';

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(uristring, function (err, res) {
     if (err) {
     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
     } else {
     console.log ('Succeeded connected to: ' + uristring);
     }
   });

app.use(express.static('public'));

app.get("/", (req, res) => {

  res.sendFile('index.html', {root: __dirname + '/public/'});
  //res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
