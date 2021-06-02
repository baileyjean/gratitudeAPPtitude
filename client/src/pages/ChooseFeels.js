import React, { Component } from 'react';
import EmotionsCard from '../components/EmotionsCard';

export default class ChooseFeels extends Component {
  render() {
    const emotions = this.props.emotions

    const emotionsList = emotions.map((emotion, index) => {
      return <EmotionsCard key = {index} emotion = {emotion} />
    })
    
    return (
      <div className="container">
        <div className="emotions">
          {emotionsList}
        </div>
      </div>
      )
  }
}