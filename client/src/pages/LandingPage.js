import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      comment: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

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
            <p>Through seeking knowledge and awareness about your current emotional state, taking action, and finding gratitude in the moment, Gratitude APPtitude will help guide you to sustainable positivity, and help tackle even the most overwhelming of emotions.</p>
            <p>The hope behind Gratitude APPtitude is that continued use will help you change your perspective and grow your "aptitude for gratitude," thereby improving your mental health.</p>
            <br />
          </div>
          <Link to="/choose-feels">
            <button>Continue</button>
          </Link>
        </div>
        <div className="commentContainer">
        <details>
          <summary>
          <h4>BEFORE You Continue... Tell Us How You're Feeling Right Now</h4>
          </summary>
          <div>
            {this.props.comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.comment}</p>
                <button onClick = {() => this.props.deleteComment(comment._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          <form onSubmit = {(e) => this.props.handleSubmit(e, this.state.comment)}>
            <input  
              value = {this.state.comment} 
              name = "comment"
              onChange = {this.handleChange}
              placeholder = "Let It Go Here <3">
            </input>
            <button>Submit</button>
          </form>
        </details>
        </div>
        </div>
    );
  }
}