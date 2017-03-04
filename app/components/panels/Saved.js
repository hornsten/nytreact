// Include React
var React = require("react");
var helpers = require("../../utils/nytHelpers");

// Create the Saved Component
var Saved = React.createClass({
  /*getInitialState: function() {
    return {
     articles: []
    };
  },
componentDidMount: function() {

 helpers.getArticles().then(function(data) {

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

       this.setState({results: articulo});
  console.log(articulo);
    }.bind(this))
 }.bind(this));
},
  setTerm: function(term) {
    this.setState({queryTerm: term});
  },*/

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
