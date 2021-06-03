import React, { Component } from 'react';
import EmotionCards from '../components/EmotionCards';

export default class ChooseFeels extends Component {
  render() {
    return (
      <div className="chooseFeelsContainer">
        <h1>Identify, Accept, then Select:</h1>
        <EmotionCards emotions = {this.props.emotions} />
      </div>
      )
  }
}