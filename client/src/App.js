import axios from 'axios';
import { BASE_URL } from './globals';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import ChooseFeels from './pages/ChooseFeels';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emotions: ['Happy', 'Sad', 'Anger', 'Disgust'],
      actionItems: [],
      gratitudeLists: [],
      readingLists: [],
      actionLists: []
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/actions`)
    this.setState({ actionItems: res.data.actions })
  }

  render() {
    for (let i = 0; i < this.state.actionItems.length; i++) {
      switch (this.state.actionItems[i].type) {
        case 'gratitudeList':
          this.state.gratitudeLists.push(this.state.actionItems[i])
          break
        case 'readingList':
          this.state.readingLists.push(this.state.actionItems[i])
          break
        case 'actionList':
          this.state.actionLists.push(this.state.actionItems[i])
          break
        default:
      }
    }
    return (
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/"       component = { LandingPage } />
            <Route path="/ChooseFeels"  component = {(props) => ( <ChooseFeels {...props} emotions = {this.state.emotions} /> )}/>
          </Switch>
        </main>
      </div>
    )
  }
}