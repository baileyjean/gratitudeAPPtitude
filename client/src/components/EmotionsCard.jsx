import React, { Component } from 'react';

export default class EmotionCard extends Component {
  render() {
    const { emotion } = this.props
    return (
      <div className="emotions">
        <h3>{emotion}</h3>
      </div >
    )
  }
}