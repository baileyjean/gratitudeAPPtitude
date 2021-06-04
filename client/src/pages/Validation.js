import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Validation extends Component {
  
  sortActionables = () => {
    let actionArray = [];
    this.props.actionables.map((action) => {
      if(action.emotionRef === this.props.match.params.id){
        actionArray.push(action)
      }
    })
    return actionArray
  }
  
  render() {
    return (
      <div className="actionablesContainer">
        <h1>When you're ready, collapse each item below for guidance.</h1>
        {this.sortActionables().map((action, index) => (
          <div key={index} className="actionCard">
          <details>
            <summary>
              <h1>{action.name}</h1>
            </summary>
            <p>{action.description}</p>
            {(action.readingLink !== undefined) 
            ? <a href={action.readingLink} alt="hope this article helps" target="_blank">Click to Read Article in a New Tab</a>
            : ''
            }
          </details>
          </div>
        )) }
        <Link to="/choose-feels">
          <button>Go Back</button>
        </Link>
      </div>
      )
  }
}