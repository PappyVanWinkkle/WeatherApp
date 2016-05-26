import React from 'react';
import { Component } from 'react';
import Search from '../container/search';
import Weather from '../container/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
          <Search />
          <Weather />
      </div>
    );
  }
}
