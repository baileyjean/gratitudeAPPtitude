import React, { Component } from 'react';

export default class EmotionCard extends Component {
  render() {
    const { emotions } = this.props
    return (
      <div className="emotionsContainer">
        <div className="emotionCard">
          <h1>{emotions[0].name}</h1>
          <p>{emotions[0].description}</p>
        </div>
        <div className="emotionCard">
          <h1>{emotions[1].name}</h1>
          <p>{emotions[1].description}</p>
        </div>
        <div className="emotionCard">
          <h1>{emotions[2].name}</h1>
          <p>{emotions[2].description}</p>
        </div>
        <div className="emotionCard">
          <h1>{emotions[3].name}</h1>
          <p>{emotions[3].description}</p>
        </div>
      </div>
    )
  }
}