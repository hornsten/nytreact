// Include React
var React = require("react");
var Link = require('react-router').Link;
// Here we include all of the sub-components
var SavedContainer = require("./containers/SavedContainer");
var SearchContainer = require("./containers/SearchContainer");
var Saved = require("./containers/panels/Saved");
var Search = require("./containers/panels/Search");
var styles = require('../styles');

//This is a stateless functional component
var Main = function(props) {

    return (
        <div className="wrapper">
            <div className="navbar navbar-success" style={{
                marginBottom: 0 + 'em'
            }}>
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">NYT</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/search">Search
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/saved">Saved</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="jumbotron text-center" style={styles.transparentBg}>
                <div className="container">
                    <h1>MERN Stack Article Finder</h1>
                    <p>Search for and save articles from the New York Times</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    );

};

// Export the component back for use in other files
module.exports = Main;
