import React, { Component } from 'react';
import EmotionsCard from '../components/EmotionsCard';

export default class ChooseFeels extends Component {
  render() {
    const emotions = this.props.emotions
    const emotionsList = emotions.map((emotion, index) => (
      <EmotionsCard key={index} emotion={emotion} />
    ))
    console.log(emotionsList)
    return (
      <div>
        {emotionsList}
      </div>
    )
  }
}