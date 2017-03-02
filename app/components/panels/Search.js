// Include React
var React = require("react");

// Create the Imgr Component
var Search = React.createClass({

 // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { topic: "", startYear: 0, endYear: 0 };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleClick: function(event) {
    var newState = {};
    newState[event.target.topic] = event.target.value;
    this.setState(newState);
  },
  // Here we descibe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-md-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Topic</strong>
                    </h4>
                    {/*
                      Note how each of the form elements has an id that matches the state.
                      This is not necessary but it is convenient.
                      Also note how each has an onChange event associated with our handleChange event.
                    */}
                    <input
                      type="text"
                      value={this.state.topic}
                      className="form-control"
                      id="topic"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>Start Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.startYear}
                      className="form-control"
                      id="startYear"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>End Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.endYear}
                      className="form-control"
                      id="endYear"
                      onChange={this.handleChange}
                      required
                    />
                     <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h2>
                      {this.state.startYear} + {this.state.endYear} =
                      {Number(this.state.startYear) + Number(this.state.endYear)}
                    </h2>
                    <h2>
                      {this.state.topic} Reversed: {this.state.topic.split("").reverse().join("")}
                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
