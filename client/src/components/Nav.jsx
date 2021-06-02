import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <NavLink to="/">Welcome to Gratitude APPtitude</NavLink>
          <NavLink to="/choosefeels">How Are You Feeling Today?</NavLink>
        </div>
      </nav>
    );
  }
}