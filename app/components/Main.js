// Include React
var React = require("react");

// Here we include all of the sub-components
var Adder = require("./panels/Adder");
var Multiplier = require("./panels/Multiplier");
var Saved = require("./panels/Saved");
var Search = require("./panels/Search");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: 1 + this.state.clicks });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="wrapper">
          <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header text-center">
      I Am A Navbar!
    </div>
  </div>
</nav>       
          <div className="jumbotron text-center">
              <div className="container">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and annotate articles of interest</p>
            <p>
       { /*
                Here we create a button click.
                Note how we have an onClick event associated with our handleClick function.
                this.handleClick references the handleClick function defined above our render function
              */}
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
            </p>
          </div>

          {/*
            Below we add each of the sub components.
            Note how we "pass" in the click count as a prop called "clicks"
          */}
          </div>
          <div className="container">
               <div className="row">
          <div className="col-md-3">

            <Adder clicks={this.state.clicks} />

          </div>

          <div className="col-md-3">

            <Multiplier clicks={this.state.clicks} />

          </div>


          <div className="col-md-3">

            <Saved clicks={this.state.clicks} />

          </div>

          <div className="col-md-3">

            <Search clicks={this.state.clicks} />

          </div>

        </div>

      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
