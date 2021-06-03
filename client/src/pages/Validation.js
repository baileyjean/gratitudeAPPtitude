import React, { Component } from 'react';
//import ActionableCards from '../components/ActionableCards';
import { Link } from 'react-router-dom';

export default class Validation extends Component {
  
  sortActionables = () => {
    
  }
  
  render() {
    console.log(this.props.match.params.id)
    const { emotions, actionables } = this.props;
    return (
      <div className="container">
        <div>
          Your feelings are valid.
          {actionables.map(action =>
          <Link to={`/action/${action._id}`} key={action._id} color={`white`}>
            <p>{action.name}</p>
            <p>{action.description}</p>
          </Link>
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