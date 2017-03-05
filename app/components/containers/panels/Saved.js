// Include React
var React = require("react");

// Create the Saved Component
var Saved = React.createClass({

    render: function() {
        return (

            <div>{this.props.articles}</div>
        );
    }
});

// Export the component back for use in other files
module.exports = Saved;
