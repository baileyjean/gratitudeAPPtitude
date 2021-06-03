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
      emotions: [],
      actionables: [],
      comments: [],
      gratitudeLists: [],
      readingLists: [],
      actionLists: [],
      myFeelsID: '',
      myFeel: ''
    }
  }

  async componentDidMount() {
    const resActionables = await BASE_URL.get(`/actions`)
    const resEmotions = await BASE_URL.get(`/emotions`)
    const resComments = await BASE_URL.get(`/comments`)
    this.setState({ actionables: resActionables.data.actions })
    this.setState({ emotions: resEmotions.data.emotions })
    this.setState({ comments: resComments.data.comments })
  }

  getEmotionID = async (id) => {
    const res = await BASE_URL.get(`/emotions/${id}`)
    this.setState({ myFeelsID: res.data.results })
  }

  render() {
    console.log(`AXIOS CALL - Emotions: `, this.state.emotions)
    console.log(`AXIOS CALL - Actionables: `, this.state.actionables)
    console.log(`AXIOS CALL - Comments: `, this.state.comments)
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
            <Route path="/choose-feels" component = {(props) => ( 
              <ChooseFeels {...props} 
                emotions = {this.state.emotions} 
                myFeels = {this.state.myFeels}
                onClick= { () => this.state.getEmotionID(`60b648d6f662260aa81caf29`) }
              /> 
            )}/>
            <Route path="/validation" component = {(props) => ( 
              <Validation {...props} 
                emotions = {this.state.emotions} 
                myFeels = {this.state.myFeels}
              /> 
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}