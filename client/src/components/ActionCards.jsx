import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmotionCards extends Component {
  render() {
    const { actionables, sortActionables } = this.props;

    return (
      <div className="emotionsContainer">
        {this.sortActionables().map((action, index) => (
          <Link to={`/action/${action._id}`} key={action._id}>
            <p>{action.name}</p>
            <p>{action.description}</p>
          </Link>
        ))}
      </div>
    )
  }
}