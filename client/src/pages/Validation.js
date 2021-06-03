import React, { Component } from 'react';

export default class Validation extends Component {
  render() {
    return (
      <div className="container">
        <div className="valid">
          Your feelings are valid.
        </div>
        <br />
        <a href="/choose-feels">
          <button>Go Back</button>
        </a>
      </div>
      )
  }
}