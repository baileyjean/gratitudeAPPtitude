import React, { Component } from 'react';

export default class EmotionCard extends Component {
  render() {
    const { emotion } = this.props
    return (
      <div className="emotionCard">
        <h1>{emotion}</h1>
      </div>
    )
  }
}