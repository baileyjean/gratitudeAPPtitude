import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmotionCards extends Component {
  render() {
    const { emotions } = this.props;
    return (
      <div className="emotionsContainer">
        <Link to="/emotions/60b648d6f662260aa81caf29" className="emotionCard">
          <h1>{emotions[0].name}</h1>
          <p>{emotions[0].description}</p>
          <p>Happy Placeholder</p>
        </Link>
        <Link to="/emotions/" className="emotionCard">
          {/* <h1>{emotions[1].name}</h1>
          <p>{emotions[1].description}</p> */}
          <p>Sad Placeholder</p>
        </Link>
        <Link to="/emotions/" className="emotionCard">
          {/* <h1>{emotions[2].name}</h1>
          <p>{emotions[2].description}</p> */}
          <p>Anger Placeholder</p>
        </Link>
        <Link to="/emotions/" className="emotionCard">
          {/* <h1>{emotions[3].name}</h1>
          <p>{emotions[3].description}</p> */}
          <p>Disgust Placeholder</p>
        </Link>
      </div>
    )
  }
}