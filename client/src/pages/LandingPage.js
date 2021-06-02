import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="landingPage">
          <h1>Gratitude APPtitude</h1>
          <h3>Empowering You to Create a Sustainable Attitude of Gratitude, No Matter Your Mood</h3>
          <hr />
          <div className="leftAlignMain">
            <h4>Gratitude APPtitude is predicated on two ideas:</h4>
            <li>A new theory in neuropsychological research, which states that the entire spectrum of human emotions can be synthesized down to four basic emotions.</li>
            <li>The idea that negative emotions are directly proportional to lack of gratitude.</li>
            <h4>How It Works</h4>
            <p>Using an action-filled, research-based approach, Gratitude APPtitude will help guide you through a series of exercises and prompts to help you maintain or improve your current emotional state, and tackle even the most overwhelming of emotions.</p>
            <p>The hope behind Gratitude APPtitude is that continued use will help you change your perspective and grow your "aptitude for gratitude," thereby improving your mental health.</p>
            <br />
          </div>
          <a href="/choosefeels">
            <button>Continue</button>
          </a>
        </div>
      </div>
    );
  }
}