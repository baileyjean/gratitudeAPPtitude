import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class ActionableCards extends Component {
  render() {
    console.log(`From ActionableCards:`, this.props)

    // use axios call to grab action by emotionRef
    // comparison logic to look at emotionRef of path & emotionRef FROM axios call

    return (
      <div>
        Yo what up with it
        {/* <Link to="/validation/feeling-happy" className="emotionCard">
          <h1>{emotions[0].name}</h1>
          <p>{emotions[0].description}</p>
        </Link>
        <Link to="/validation/feeling-sad" className="emotionCard">
          <h1>{emotions[1].name}</h1>
          <p>{emotions[1].description}</p>
        </Link>
        <Link to="/validation/feeling-anger" className="emotionCard">
          <h1>{emotions[2].name}</h1>
          <p>{emotions[2].description}</p>
        </Link>
        <Link to="/validation/feeling-disgust" className="emotionCard">
          <h1>{emotions[3].name}</h1>
          <p>{emotions[3].description}</p>
        </Link> */}
      </div>
    )
  }
}