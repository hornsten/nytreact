var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var PORT = process.env.PORT || 3000;
var Article = require('./models/Article');

// Use native promises
mongoose.Promise = global.Promise;

// var uri = "mongodb://heroku_93x5m90j:oie6nsilvllanl3mff0nr3v1a0@ds157349.mlab.com:57349/heroku_93x5m90j" || "mongodb://localhost/nytreact";
var uri = "mongodb://localhost/nytreact";
mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('We are connected to db!');
});

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

//Main '/' Route. This will redirect to our rendered React applicaiton
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
 Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.title);
 var art = new Article({
        title: req.body.title,
        url: req.body.url      
    });

    art.save(function(err, art) {
        // If there's an error during this query
        if (err) {
            // Log the error
            return console.log(err);
        }
        // Otherwise,
        else {
            //log results
        
            res.send(art);
        }
    });

});

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});