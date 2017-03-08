var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

//      debugger;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp:temp
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <p>Fetching weather...</p>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        return (
           <div>
               <h2>Weather Component</h2>
               <WeatherForm onSearch={this.handleSearch}/>
               {renderMessage()}
           </div>
        )
    }
});

module.exports = Weather;

// voi jättää pois var {temp, location} = this.state;
// ja laittaa suoraan tagiin <WeatherMessage temp={this.state.temp}....jne