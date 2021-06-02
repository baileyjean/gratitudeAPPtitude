import React, { Component } from 'react';

export default class EmotionCard extends Component {
  render() {
    const { emotions } = this.props
    console.log(`emotions from EmotionsCard`, emotions)
    console.log(`EMOTIONSCARD: emotions.name >> `, emotions.name)
    return (
      <div className="emotionCard">
        <h1>{emotions.name}</h1>
      </div>
    )
  }
}