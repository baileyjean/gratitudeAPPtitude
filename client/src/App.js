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
      loading: true
    }
  }

  async componentDidMount() {
    const resActionables = await BASE_URL.get(`/actions`)
    const resEmotions = await BASE_URL.get(`/emotions`)
    const resComments = await BASE_URL.get(`/comments`)
    
    this.setState({ 
      actionables: resActionables.data.actions, 
      emotions: resEmotions.data.emotions, 
      comments: resComments.data.comments 
    },
    () => {
      this.setState({loading: false})
    })
  }
  render() {
    console.log(this.state)
    
    // const actionables = this.state.actionables;
    // this.setState.gratitudeLists = []
    // this.setState.readingLists = []
    // this.setState.actionLists = []

    // for (let i = 0; i < actionables.length; i++) {
    //   switch (actionables[i].name) {
    //     case 'gratitudeList': 
    //       this.state.gratitudeLists.push(actionables[i])
    //       break;
    //     case 'readingList':
    //       this.state.readingLists.push(actionables[i])
    //       break;
    //     case 'actionList':
    //       this.state.actionLists.push(actionables[i])
    //       break;
    //     default:
    //       break;
    //   }
    // }

    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component = { LandingPage } />

            <Route path="/choose-feels" component = {(props) => 
              this.state.loading ? <div>Loading</div> : ( 
                <ChooseFeels {...props} 
                  emotions = {this.state.emotions}
                /> 
              )}/>

            <Route path="/emotions/:id" component = {(props) => ( 
              <Validation {...props} 
                emotions = {this.state.emotions}
              /> 
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}