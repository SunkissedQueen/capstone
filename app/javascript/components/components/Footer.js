import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <footer>
        <ul>
          &copy; 2021 Syntactical Magician
          <NavLink to="/aboutme">About Me</NavLink>
          <NavLink to="/acknowledgment">Acknowledgment</NavLink>
        </ul>
      </footer>
    )
  }
}

export default Footer