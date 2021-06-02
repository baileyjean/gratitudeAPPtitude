import React, { Component } from 'react';
import EmotionsCard from '../components/EmotionsCard';

export default class ChooseFeels extends Component {
  render() {
    const emotions = this.props.emotions
    console.log(`Console logging from ChooseFeels.js: `, this.props.emotions)

    const emotionsList = emotions.map((emotion, index) => {
      return <EmotionsCard key = {index} emotion = {emotion} />
    })
    
    return (
      <div className="container">
        <div className="emotionsList">
          {emotionsList}
        </div>
      </div>
      )
  }
}