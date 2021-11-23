import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        { logged_in &&
          <div>
            <h1>Hello, User</h1>
            <a href={sign_out_route }>Sign Out</a>
            <Nav>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/learn">Learn More</NavLink>
            </NavItem>
          </Nav>
          </div>
        }
        { !logged_in &&
          <ul>
            <a href={ sign_in_route }>Sign In</a>
            <a href={ new_user_route }>Sign Up</a>
          </ul>
        }
      </React.Fragment>
    )
  }
}

export default Header