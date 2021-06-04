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
      <div className="container">
        {this.sortActionables().map((action, index) => (
          <div className="emotionContainer">
            <p>{action.name}</p>
            <p>{action.description}</p>
          </div>
        )) }
      </div>
      )
  }
}