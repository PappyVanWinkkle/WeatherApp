/*
Weather list container
*/
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

 class Weather extends Component {
   getWeather(cityData) {
     const name     = cityData.city.name;
     const temp     = cityData.list.map(weather => weather.main.temp);
     const humid    = cityData.list.map(weather => weather.main.humidity);
     const pressure = cityData.list.map(weather => weather.main.pressure);
     const {lon, lat} = cityData.city.coord;
     return (
       <tr key={name}>
         <td>
            <GoogleMap lon={lon}  lat={lat}/>
         </td>
         <td>
           <Chart data={temp}/>
         </td>
         <td><Chart data={humid}/></td>
         <td><Chart data={pressure}/></td>
       </tr>

     )
   }
  render() {
    return (
      <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp flex-container">
        <thead>
           <tr>
              <th className="mdl-data-table__cell--non-numeric">City</th>
              <th className="mdl-data-table__cell--non-numeric">Temperature <span>(k)</span></th>
              <th className="mdl-data-table__cell--non-numeric">Humidity <span>(%)</span></th>
              <th className="mdl-data-table__cell--non-numeric">Pressure <span>(HPA)</span></th>

           </tr>
        </thead>
        <tbody>
           {this.props.weather.map(this.getWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(Weather)
