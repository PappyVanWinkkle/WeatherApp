/*
Weather list container
*/
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesBars, SparklinesReferenceLine} from 'react-sparklines';
import Chart from '../components/chart';

 class Weather extends Component {
   getWeather(cityData) {
     const name     = cityData.city.name;
     const temp     = cityData.list.map(weather => weather.main.temp);
     const humid    = cityData.list.map(weather => weather.main.humidity);
     const pressure = cityData.list.map(weather => weather.main.humidity);
     return (
       <tr key={name}>
         <td>{name}</td>
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
      <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
        <thead>
           <tr>
              <th className="mdl-data-table__cell--non-numeric">City</th>
              <th className="mdl-data-table__cell--non-numeric">Temperature</th>
              <th className="mdl-data-table__cell--non-numeric">Humidity</th>
              <th className="mdl-data-table__cell--non-numeric">Pressure</th>

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
