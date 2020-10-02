const express = require('express'); 
const app = express();
const http = require('http');
const mongoose = require("mongoose");
const uristring = process.env.KATINI_DB_URI || 'mongodb://localhost/HelloMongoose'
const theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
     if (err) {
     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
     } else {
     console.log ('Succeeded connected to: ' + uristring);
     }
   });

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//      res.sendFile('index.html', {root: __dirname + '/public/'});
// });

// app.listen(process.env.PORT || 5000)

