// Include React
var React = require("react");

// Create the Saved Component

var Saved = function(props) {
  return (
    <div>{props.articles}</div>
  );
};

// Export the component back for use in other files
module.exports = Saved;