import React, { Component } from 'react';

export default class TakeAction extends Component {
  printActionables = () => {
    let printAction = [];
    this.props.actionables.map((action, index) => {
      console.log(action._id)
      if(action._id === this.props.match.params.id){
        printAction.push(action)
      }
    })
    console.log(printAction)
    return printAction
  }
  
  render() {
    console.log(this.props.actionables)
    console.log(this.printActionables)
    return (
      <div className="chooseFeelsContainer">
        <h1>List:</h1>
        <p>{this.printActionables}</p>
      </div>
      )
  }
}