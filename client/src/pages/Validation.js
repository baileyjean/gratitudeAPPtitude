import React, { Component } from 'react';
//import ActionableCards from '../components/ActionableCards';
import { Link } from 'react-router-dom';

export default class Validation extends Component {
  render() {
    const { emotions, actionables } = this.props;
    return (
      <div className="container">
        <div className="valid">
          Your feelings are valid.
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
        <br />
        <a href="/choose-feels">
          <button>Go Back</button>
        </a>
      </div>
      )
  }
}