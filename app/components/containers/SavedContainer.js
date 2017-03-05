// Include React
var React = require("react");
var helpers = require("../../utils/nytHelpers");
var Saved = require("../panels/Saved");

const SavedContainer = React.createClass({

    getInitialState: function() {
        return {articles: []}
    },

    componentDidMount: function() {
        // Get the saved articles
        helpers.getArticles().then(function(response) {

            if (response !== this.state.articles) {
                var articulo = response.map(function(arts, i) {

                    return <div className="well" key={i}>
                        <h4 className="articleHeadline">
                            <span className="label label-success">{i + 1}</span>
                             {arts.title}</h4>
                        <h5>{arts.date}</h5>
                        <a href={arts.url}>{arts.url}</a>
                        <form method="POST" action="/api/one/{arts._id}">
                            {/*<input type="hidden" name="title" value={arts.title}/>*/}
                            <input type="hidden" name="_id" value={arts._id}/>
                            <br></br>
                            <button className="btn btn-success" data-loading-text="<i className='fa fa-spinner fa-spin'></i>Deleting" type="submit">Delete</button>
                        </form>
                    </div>;
                })
                console.log("Articles", response);
                this.setState({articles: articulo});
            }
        }.bind(this));
    },

    deleteArticle: function(artId) {
        helpers.deleteArticle(artId).then(() => {
            const newArticles = _.filter(this.state.articles, article => article.id != artId);
            this.setState({articles: newArticles})
        });
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
