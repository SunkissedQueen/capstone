import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from "./pages/AboutMe"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"

class App extends Component {
  constructor(props){
    super(props)
  }
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
     
        <Router>
          <Header {...this.props} />
        <h1>My Personal Capstone</h1>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/aboutme" component={ AboutMe } />
          <Route path="/learn" component={ LearnMore } />
        </Switch>
        <Footer/>
        </Router>
  
    )
  }
}

export default App
