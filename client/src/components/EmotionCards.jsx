import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmotionCards extends Component {
  render() {
    const { emotions } = this.props;

    return (
      <div className="emotionsContainer">
        {emotions.map(emotion =>
          <Link to={`/emotions/${emotion._id}`} key={emotion._id} className="emotionCard">
            <h1>{emotion.name}</h1>
            <p>{emotion.description}</p>
          </Link>
        )}
      </div>
    )
  }
}