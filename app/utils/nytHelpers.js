// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Based on the queryTerm we will create a queryURL 

// Helper functions for making API Calls
var nytHelpers = {

  // This function serves our purpose of running the query
  runQuery: function(queryTerm) {

    console.log(queryTerm);
  
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

    // Find articles
var queryURL = queryURLBase + "&q=" + queryTerm;
    return axios.get(queryURL).then(function(response) {
     
      return response.data.response.docs;
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/api/saved").then(function(response) {

            return response.data;
        })
    
  },

  // This function posts new searches to our database.
  postArticle: function(artTitle,artUrl) {
    return axios.post("/api", { title: artTitle, url: artUrl });
  },

deleteArticle: function() {
  return axios.delete("/api/one/:_id", {params: { _id: artsId }})

}
};




// We export the API helper
module.exports = nytHelpers;
