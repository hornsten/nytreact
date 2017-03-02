// var express = require("express");
// var router = express.Router();
// var Article = require("../models/Article.js");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var mongoose = require("mongoose");
// var request = require("request");

// // Use native promises
// mongoose.Promise = global.Promise;

// // var uri = "mongodb://heroku_93x5m90j:oie6nsilvllanl3mff0nr3v1a0@ds157349.mlab.com:57349/heroku_93x5m90j" || "mongodb://localhost/nytreact";
// var uri = "mongodb://localhost/nytreact";
// mongoose.connect(uri);

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     // we're connected!
//     console.log('We are connected to db!');
// });



// // Saved articles
// router.get("/api/saved", function(req, res) {
//     var query = Article.find({});

//     query.exec(function(err, articles) {
//         if (err) {
//             return handleError(err);
//         } else {

//             res.json(articles);
//         }
//     });
// });


// //allows the user to save articles into the db
// router.post("/api/saved", function(req, res) {

//     var art = new Article({
//         title: req.body.title,
//         //????????
//         date: Date(now),
//         url: req.body.url
//     });

//     art.save(function(err, art) {
//         // If there's an error during this query
//         if (err) {
//             // Log the error
//             return console.log(err);
//         }
//         // Otherwise,
//         else {
//             //log results
//         }
//     });
//     //this brings the user back to the scraped results (not root page) so they can browse and save more
//     res.redirect("/");

// })

// //Delete route for articles
// router.post("/api/saved", function(req, res) {

//     Article.findOneAndRemove({ "_id": req.params.id }, { $push: { 'comment': Comment._id } }, function(err) {
//         if (err) {
//             return handleError(err);
//         } else {

//             res.redirect('/saved');
//         }

//     });

// });

// router.get("/", function(req, res) {
//     res.render("index.html");
// })

// module.exports = router;
