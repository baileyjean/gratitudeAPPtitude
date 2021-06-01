import React, { Component } from 'react'

export default class EmotionCard extends Component {
  render() {
    const { emotion } = this.props
    return (
      <div className="emotions">
        <h3>{emotion.name}</h3>
        <div className="description">{emotion.description}</div>
      </div >
    )
  }
}