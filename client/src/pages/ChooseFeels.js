import React, { Component } from 'react';
import EmotionCards from '../components/EmotionCards';

export default class ChooseFeels extends Component {
  render() {
    const { emotions } = this.props;

    return (
      <div className="chooseFeelsContainer">
        <h1>Identify, Accept, then Select:</h1>
        <EmotionCards emotions = {emotions} />
      </div>
      )
  }
}