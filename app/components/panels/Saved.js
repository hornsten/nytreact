// Include React
var React = require("react");

// Create the Saved Component
var Saved = React.createClass({
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          {/* Saved multiplies the number of clicks by a random number between 1 and 10 */}
          <h1>{this.props.clicks * (Math.floor(Math.random() * 10) + 1)}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
