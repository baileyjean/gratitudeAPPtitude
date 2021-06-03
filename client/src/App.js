import { BASE_URL } from './globals';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import ChooseFeels from './pages/ChooseFeels';
import Validation from './pages/Validation';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emotions: [
        {
          name: "Happy",
          description: "This is happiness"
        }, 
        {
          name: "Sad",
          description: "This is sadness"
        },
        {
          name: "Anger",
          description: "This is anger"
        },
        {
          name: "Disgust",
          description: "This is disgust"
        }
      ],
      actionables: [],
      gratitudeLists: [],
      readingLists: [],
      actionLists: [],
      comments: [],
      myFeels: ''
    }
  }

  async componentDidMount() {
    const res = await BASE_URL.get(`/actions`)
    this.setState({ actionables: res.data.actions })
  }

  render() {
    const actionables = this.state.actionables;
    // if the loop below gives problems down the road, try using a resetState on each list

    for (let i = 0; i < actionables.length; i++) {
      switch (actionables[i].name) {
        case 'gratitudeList': 
          this.state.gratitudeLists.push(actionables[i])
          break;
        case 'readingList':
          this.state.readingLists.push(actionables[i])
          break;
        case 'actionList':
          this.state.actionLists.push(actionables[i])
          break;
        default:
          break;
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
            <Route path="/choose-feels" component = {(props) => ( <ChooseFeels {...props} emotions = {this.state.emotions} myFeels = {this.state.myFeels} /> )}/>
            <Route path="/validation" component = {(props) => ( <Validation {...props} emotions = {this.state.emotions} myFeels = {this.state.myFeels}/> )}/>
          </Switch>
        </div>
      </div>
    )
  }
}