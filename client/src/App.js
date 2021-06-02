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
      actionables: [],
      gratitudeLists: [],
      readingLists: [],
      actionLists: []
    }
  }

  async componentDidMount() {
    const res = await BASE_URL.get(`/actions`)
    this.setState({ actionables: res.data.actions })
  }

  render() {
    const actionables = this.state.actionables;

    for (let i = 0; i < actionables.length; i++) {
      switch (actionables[i].name) {
        case 'gratitudeList':
          this.state.gratitudeLists.push(actionables[i])
          break
          case 'readingList':
            this.state.readingLists.push(actionables[i])
            break
            case 'actionList':
              this.state.actionLists.push(actionables[i])
              break
              default:
              }
            }
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component = { LandingPage } />
            <Route path="/choosefeels" component = {(props) => ( <ChooseFeels {...props} emotions = {this.state.emotions} /> )}/>
          </Switch>
        </div>
      </div>
    )
  }
}