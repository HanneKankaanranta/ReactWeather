var React = require('react');

var WeatherForm = React.createClass ({
    onFormSubmit: function(e) {
       e.preventDefault();

       var location = this.refs.location.value;

       if (location.length > 0) {
           this.refs.location.value = '';
           this.props.onSearch(location);
       }
    },
    render: function () {
       return (
           <div>
               <form onSubmit={this.onFormSubmit}>
                   <input type="text" ref="location" placeholder="Enter city name"></input>
                   <button>Get Weather</button>
               </form>
           </div>
       );
    }
});

module.exports = WeatherForm;

// e = event
// e.preventDefault estää sivua latautumasta joka kerta