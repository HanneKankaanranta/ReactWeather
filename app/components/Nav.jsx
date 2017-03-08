var React = require('react');
var {Link, IndexLink} = require('react-router');

// Luo siis Link-propertyn joka on eqal to rect-router-objectin Link-propertyyn

//var Nav = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <h2>Navigation Bar</h2>
//                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Get Weather</IndexLink>
//                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>About</Link>
//                <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</Link>
//            </div>
//        );
//    }
//});

var Nav = () => {
    return (
        <div>
            <h2>Navigation Bar</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>About</Link>
            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</Link>
        </div>
    );
}

module.exports = Nav;