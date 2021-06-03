import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ActionableCards extends Component {
  render() {
    const { emotions, actionables } = this.props;
    // use axios call to grab action by emotionRef
    // comparison logic to look at emotionRef of path & emotionRef FROM axios call

    return (
      <div>
        {emotions.map(emotion => {
          actionables.map(action =>
            <Link to={`/takeaction/${emotion._id}`} key={action._id} className="emotionCard">
              <h1>{action.name}</h1>
              <p>{action.description}</p>
            </Link>
          )
        }
        )}
      </div>
    )
  }
}