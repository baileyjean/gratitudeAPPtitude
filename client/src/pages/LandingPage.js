import React, { Component } from 'react';
import EmotionsCard from '../components/EmotionsCard';

export default class LandingPage extends Component {
  render() {
    const { emotion } = this.props
    const emotionsList = emotion.map((item, index) => (
      <EmotionsCard key={index} emotion={item} />
    ))
    console.log(emotion)
    return (
      <div className="page">
        Welcome to the Landing Page
      </div>
    );
  }
}