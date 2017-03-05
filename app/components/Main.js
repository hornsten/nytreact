// Include React
var React = require("react");

// Here we include all of the sub-components
var SavedContainer = require("./containers/SavedContainer");
var SearchContainer = require("./containers/SearchContainer");
var Saved = require("./panels/Saved");
var Search = require("./panels/Search");

var helpers = require("../utils/nytHelpers");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  /*getInitialState: function() {

    return {
     queryTerm: ""
    };
  },

componentDidUpdate: function() {

  helpers.runQuery(this.state.queryTerm,this.state.startYear, this.state.endYear).then(function(data){
    var articulo = data.map(function(art,i) {

var artTitle = art.headline.main;
var artUrl = art.web_url;

     return <div className="well" key={i}>
        <h4 className="articleHeadline"><span className="label label-primary">{i+1}</span> {art.headline.main}</h4>
        <h5>{art.pub_date}</h5>
         <h5>{art.section_name}</h5>
         <p>{art.snippet}</p>
        <a href={art.web_url}>{art.web_url}</a>  
        <form method="POST" action="/api">
            <input type="hidden" name="title" value={art.headline.main}/>
            <input type="hidden" name="url" value={art.web_url}/>
            <br></br>
            <button className="btn btn-info" data-loading-text="<i className='fa fa-spinner fa-spin'></i>Saving" type="submit">Save</button>
          </form>
      </div>;
    })

    this.setState({results: articulo});
  console.log(articulo);

   }.bind(this));
   
},

  setTerm: function(term) {
    this.setState({queryTerm: term});
  },*/
  
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
{/*{this.props.children}*/}
    {/*<Search setTerm={this.setTerm} setStartYear={this.startYear} setEndYear={this.endYear} results={this.state.results} />*/}
<SearchContainer />
          </div>
</div>
 <div className="row">
          <div className="col-md-12">
<SavedContainer />
           
          </div>

        </div>

      </div>
  </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
