import React, { Component } from 'react'
import './styles/App.css'
// Your imports here
import Nav from './components/Header'
import { Route, Switch } from 'react-router'
import LandingPage from './pages/LandingPage'
import ChooseFeels from './pages/ChooseFeels'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/ChooseFeels" component={ ChooseFeels } />
          </Switch>
        </main>
      </div>
    )
  }
}