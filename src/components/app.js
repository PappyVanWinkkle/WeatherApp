import React from 'react';
import { Component } from 'react';
import Search from '../container/search';
import Weather from '../container/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
          <Search />
          <Weather />
      </div>
    );
  }
}
