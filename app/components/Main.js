// Include React
var React = require("react");

// Here we include all of the sub-components
var Saved = require("./panels/Saved");
var Search = require("./panels/Search");

var helpers = require("../utils/nytHelpers");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
     queryTerm: "",
     startYear: 0,
     endYear: 0
    };
  },
componentDidUpdate: function() {

  helpers.runQuery(this.state.queryTerm,this.state.startYear, this.state.endYear).then(function(data){
    console.log(data);
    this.setState({results: data});
  }.bind(this));
},
  setTerm: function(term) {
    this.setState({queryTerm: term});
  },
  setStartYear: function(startYear) {
    this.setState({startYear: startYear});
  },
  setEndYear: function(endYear) {
    this.setState({endYear: endYear});
  },
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="wrapper">
             
          <div className="jumbotron text-center">
              <div className="container">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and annotate articles of interest</p>
            <p>
            </p>
          </div>
          
          </div>
          <div className="container">
               <div className="row">
          <div className="col-md-12">

    <Search setTerm={this.setTerm} setStartYear={this.startYear} setEndYear={this.endYear} results={this.state.results} />

          </div>
</div>
 <div className="row">
          <div className="col-md-12">

            {/*<Saved clicks={this.state.clicks} />*/}

          </div>

        </div>

      </div>
  </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
