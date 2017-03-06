// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// API key for New York Times
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var nytHelpers = {

  // This function runs the query
  runQuery: function(queryTerm) {

    console.log(queryTerm);
  
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

    // Find articles based on the query
var queryURL = queryURLBase + "&q=" + queryTerm;
    return axios.get(queryURL).then(function(response) {
     
      return response.data.response.docs;
    });
  },

  // Retrieve saved articles from the db
  getArticles: function() {
    return axios.get("/api/saved").then(function(response) {

            return response.data;
        })
    
  },

  // Save a new article to the db
  postArticle: function(artTitle,artUrl) {
    console.log('hitting axios post');
    return axios.post("/api", { title: artTitle, url: artUrl });
  },

//Delete a saved article from the db
deleteArticle: function(articleId) {

  return axios.delete("/api/saved/"+articleId);

}

};




// Export nytHelpers
module.exports = nytHelpers;
