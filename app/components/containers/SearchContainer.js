var React = require("react");
var helpers = require("../../utils/nytHelpers");
var Search = require("../panels/Search");

const SearchContainer = React.createClass({

 getInitialState: function() {

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
  },
    // Here we describe this component's render method
  render: function() {
    return (
<div>
    <Search setTerm={this.setTerm} setStartYear={this.startYear} setEndYear={this.endYear} results={this.state.results} />

          </div>

    );
  }


});

module.exports= SearchContainer;