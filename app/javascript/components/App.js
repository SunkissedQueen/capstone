import React, { Component } from 'react'
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

import AboutMe from "./pages/AboutMe"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"

class App extends Component {
  render () {
    return (
     
        <Router>
        <h1>My Personal Capstone</h1>
          <Nav>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aboutme">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/learn">Learn More</NavLink>
            </NavItem>
          </Nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/aboutme" component={ AboutMe } />
          <Route path="/learn" component={ LearnMore } />
        </Switch>
        </Router>
  
    )
  }
}

export default App
