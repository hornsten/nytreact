// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
// var queryTerm = "";
// var numResults = 0;
// var startYear = 0;
// var endYear = 0;

// Based on the queryTerm we will create a queryURL 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";


// Helper functions for making API Calls
var nytHelpers = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(queryTerm,startYear,endYear) {

    console.log(queryTerm, startYear,endYear);

    // Figure out the geolocation
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" + "&q=" + queryTerm;
// + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      // if (response.data.results[0]) {
      //   return response.data.results[0].formatted;
      // }
      // // If we don't get any results, return an empty string
      // return "";
      return response.data.response.docs;
    });
  }

  // This function hits our own server to retrieve the record of query results
//   getHistory: function() {
//     return axios.get("/api");
//   },

  // This function posts new searches to our database.
//   postHistory: function(location) {
//     return axios.post("/api", { location: location });
//   }
};

// We export the API helper
module.exports = nytHelpers;
