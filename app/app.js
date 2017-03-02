// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Routes
var routes = require("./config/routes");

// This code here allows us to render an entire block of Bootstrap layout HTML using
// our Main Component
ReactDOM.render(routes, document.getElementById("app"));
