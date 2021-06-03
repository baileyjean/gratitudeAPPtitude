import React, { Component } from 'react';
import EmotionCards from '../components/EmotionCards';

export default class ChooseFeels extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="chooseFeelsContainer">
        <h1>Identify, Accept, then Select:</h1>
        <EmotionCards emotions = {this.props.emotions} />
      </div>
      )
  }
}