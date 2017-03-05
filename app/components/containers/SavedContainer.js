// Include React
var React = require("react");
var helpers = require("../../utils/nytHelpers");
var Saved = require("./panels/Saved");

const SavedContainer = React.createClass({

    getInitialState: function() {
        return {articles: []}
    },
    
    componentDidMount: function() {
        // Get the saved articles
        helpers.getArticles().then(function(response) {
var component = this;
            if (response !== this.state.articles) {
               
                var articulo = response.map(function(arts, i) {
                
                    return <div className="well" key={i}>
                        <h4 className="articleHeadline">
                            <span className="label label-success">{i + 1}</span>
                             {arts.title}</h4>
                        <h5>{arts.date}</h5>
                        <a href={arts.url}>{arts.url}</a>
                        {/*<form method="POST">*/}
                            {/*<input type="hidden" name="title" value={arts.title}/>*/}
                            <input type="hidden" name="articleId" value={arts._id}/>
                            <br></br>
                            {/*<button className="btn btn-success" data-loading-text="<i className='fa fa-spinner fa-spin'></i>Deleting" type="submit">Delete</button>*/}
<button onClick={() => component.removeArticleClick(arts._id)} className="btn btn-default text-center btn-primary">Delete</button>
                        {/*</form>*/}
                    </div>;
                })
                console.log("Articles", response);
                this.setState({articles: articulo});
            }
        }.bind(this));
    },
    
    removeArticleClick: function(response){
        helpers.deleteArticle(response)
        console.log(response);
        // update state of parent
        helpers.getArticles().then((response) => {
            // update state of parent

          
        })

    },

    render: function() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Saved Articles</h3>
                            </div>
                            <div className="panel-body">
                                <Saved articles={this.state.articles} deleteArticle={this.deleteArticle}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

});

module.exports = SavedContainer;
