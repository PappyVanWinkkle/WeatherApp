/*
Search container <Search />
*/

import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeather} from '../actions/index'

class Search extends Component {
  // Setting the state of the container
  constructor(props) {
    super(props)
    this.state = { input: ''};
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onFormSubmit   = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getWeather(this.state.input)
    this.setState({
      input: ''
    });
  }

  onInputHandler(event) {
    this.setState({
      input: event.target.value
    });

  }

  render() {
    return (
      <div className="ui grid">
         <div className="twelve wide column">
             <form onSubmit={this.onFormSubmit} className="ui action input">
                <input type="text" placeholder="Please enter a City"
                onChange={this.onInputHandler}/>
                <button className="ui yellow button">Submit</button>
             </form>
         </div>
      </div>
    )
  }
}

// Connecting the container to the index action
function mapConnectToProps(connect) {
  return bindActionCreators({getWeather}, connect);
}

export default connect(null, mapConnectToProps)(Search)
