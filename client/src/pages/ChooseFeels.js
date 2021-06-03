import React, { Component } from 'react';
import EmotionCards from '../components/EmotionCards';

export default class ChooseFeels extends Component {
  render() {
    const emotions = this.props.emotions
    return (
      <div>
        <EmotionCards emotions = {emotions} />
      </div>
      )
  }
}