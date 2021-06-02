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
    const res = await BASE_URL.get(`/actions`)
    this.setState({ actionItems: res.data.actions })
  }

  render() {
    for (let i = 0; i < this.state.actionItems.length; i++) {
      switch (this.state.actionItems[i].name) {
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
    console.log(`Console log from App.js >> between render() & return():`)
    console.log(`GRATITUDE LIST: ${this.state.gratitudeLists}`)
    console.log(`GRATITUDE LIST: ${this.state.readingLists}`)
    console.log(`GRATITUDE LIST: ${this.state.actionLists}`)
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component = { LandingPage } />
            <Route path="/ChooseFeels" component = {(props) => ( <ChooseFeels {...props} emotions = {this.state.emotions} /> )}/>
          </Switch>
        </div>
      </div>
    )
  }
}