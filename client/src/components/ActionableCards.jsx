import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ActionableCards extends Component {
  render() {
    const { emotions } = this.props;
    // use axios call to grab action by emotionRef
    // comparison logic to look at emotionRef of path & emotionRef FROM axios call

    return (
      <div>
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