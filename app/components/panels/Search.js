// Include React
var React = require("react");

// Create the Imgr Component
var Search = React.createClass({

 // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {term: "", startYear: 0, endYear: 0};
  },

  handleChange: function(event) {

    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
   
  },

  handleSubmit: function(event) {

    event.preventDefault();

    this.props.setTerm(this.state.term);
    // this.props.setStartYear(this.state.startYear);
    // this.props.setEndYear(this.state.endYear);
    this.setState({term: "",startYear: 0, endYear: 0});
  },
  // Here we descibe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Term</strong>
                    </h4>
                    {/*
                      Note how each of the form elements has an id that matches the state.
                      This is not necessary but it is convenient.
                      Also note how each has an onChange event associated with our handleChange event.
                    */}
                    <input
                      type="text"
                      value={this.state.term}
                      className="form-control"
                      id="term"
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
                    <br></br>
                     <button className="btn btn-primary btn-lg" type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body">
                <div>{this.props.results}</div>
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
