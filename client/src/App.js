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
    // the below code executes a callback once state has been set up
    // helps keep pages from breaking if/when there are mounting/setState delays downstream
    () => {
      this.setState({loading: false})
    })
  }
  render() {
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