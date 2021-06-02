import React, { Component } from 'react';
import EmotionsCard from '../components/EmotionsCard';

export default class ChooseFeels extends Component {
  render() {
    const emotions = this.props.emotions
    return (
      <div>
        <EmotionsCard emotions = {emotions} />
      </div>
      )
  }
}