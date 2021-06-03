import React, { Component } from 'react';
import ActionableCards from '../components/ActionableCards';

export default class Validation extends Component {
  render() {
    const emotions = this.props.emotions
    const myFeels = this.props.myFeels
    return (
      <div className="container">
        <div className="valid">
          Your feelings are valid.
          <ActionableCards emotions = {emotions} myFeels = {myFeels} />
        </div>
        <br />
        <a href="/choose-feels">
          <button>Go Back</button>
        </a>
      </div>
      )
  }
}