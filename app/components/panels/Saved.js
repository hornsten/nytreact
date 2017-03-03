// Include React
var React = require("react");
var helpers = require("../../utils/nytHelpers");

// Create the Saved Component
var Saved = React.createClass({
 
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          <div>{this.props.articles}</div>
          <div>No articles yet</div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
