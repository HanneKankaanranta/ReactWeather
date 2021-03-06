var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// toinen tapa var Route = require('react-router').Route; jokaiselle erikseen
// eli tässä tehdään näin:
//
// var obj =  {
//      name: 'Hanne'
// }
//
// var {name} = obj;


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
      </Route>
  </Router>,
  document.getElementById('app')
);

// About renderöidään kun path on /about
// weather renderöidään kun path on / eli ollaan perus- tai pääsivulla, index.html