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
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--10-col">
        <form onSubmit={this.onFormSubmit}>
           <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="sample1"
             onChange={this.onInputHandler}/>
            <label className="mdl-textfield__label" >Enter A City</label>
           </div>
           <span><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
             Submit
           </button></span>
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
