//Include the React library
var React = require('react');

//Include the react-router module
var router = require('react-router');

var Route = router.Route;

//Include the Router component to contain all our routes
//Here is where we can pass in some configuration as props

var Router = router.Router;

//Include the hashHistory prop to handle routing client side without a server
// var hashHistory = router.hashHistory;
var browserHistory = router.browserHistory;
//Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

var Main = require('../components/Main');
var SavedContainer = require('../components/containers/SavedContainer');
var SearchContainer = require('../components/containers/SearchContainer');

module.exports = (

//the high level component is the Router component 

 <Router history = {browserHistory}>
        <Route path="/" component={Main}>

<Route path="saved" component={SavedContainer} />
<Route path="search" component={SearchContainer} />

<IndexRoute component={SearchContainer} />

</Route>
</Router>

);
