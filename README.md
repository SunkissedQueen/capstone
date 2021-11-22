# README

# Capstone
> Outline a brief description of your project.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Tech 1 - version 1.0
- Tech 2 - version 2.0
- Tech 3 - version 3.0


## Features
List the ready features here:
- Awesome feature 1
- Awesome feature 2
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
Process
The setup includes adding React to the Rails application and adding Webpacker to compile JavaScript.

 $  rails new capstone -d postgresql -T
 $  cd capstone
 $  rails db:create
 $  bundle add react-rails
 $  rails webpacker:install
 $  rails webpacker:install:react
 $  rails generate react:install
 $  code .

Any syntax errors or incorrect code anywhere in the React components will lead to a blank page.
 - Stop the server and start it again.
 - Did all the setup commands run properly? The commands can be rerun if something isn't working.
 - Seeing a blank page? Look for errors in the terminal or inspect your page.
 - Errors? Always look at the first error in the list.

Push an existing repository from the command line
$ git remote add origin https://github.com/SunkissedQueen/capstone.git
$ git checkout -b main
$ git add .
$ git commit -m "initial commit"
$ git push origin main

Begin the rails server: $ rails server
In a browser navigate to: http://localhost:3000

In a separate terminal: $ bin/webpack-dev-server

Should just see the default rails page

Tip: Now that a main branch has been setup in the repositiory to store your code...Ensure you have the current data from your main branch that should be working...
$ git checkout main
$ git pull origin main 
$ git checkout -b new_branch

TIp: Before adding/commiting changes, always ensure you are in the proper space to store your data
$ pwd
$ git branch

Tip: Ensure you have saved the changes in your text editor
$ git status

Tip: Open up additional tabs for the servers
Command + T or click the + sign on the terminal 

React Components
Once we have a Rails application we can add a React component using a generate command.

$ rails generate react:component App

The install commands created a directory in app called javascript, which will hold another directory called components that will contain our App.js React component.

Rails Controller and View
Next, we need to generate a controller so that we can route to the React component that will be rendered in the browser through the Rails view.
$ rails g controller Home
Add a file in app/views/home called index.html.erb
Add the following code to that file  <%= react_component 'App' %>

Rails Routes
Create a route so the React component will be rendered in a Rails view.

config/routes.rb

Rails.application.routes.draw do
  root 'home#index'
end

Refresh the browser. At this point you should see the info in between the header tag on the App.js.

Push changes to git hub repository
Pull request, merge, delete branch
-Open pull request
-Merge pull request
-Delete branch
Open a new branch on terminal
$ git branch -d component

Tips--
error: Your local changes to the following files would be overwritten by checkout:
	README.md
Please commit your changes or stash them before you switch branches.
Aborting
Corrections-----> checkout a new branch, add changes, and commit...checkout and pull main...checkout the new branch

import React, { Component } from 'react'
allows to replace React.Component

Reactstrap
Modify the Rails stylesheet to be a stylesheet with an .scss extension, which allows regular css code as well as import necessary dependencies. scss stands for Syntactially Awesome Styles Sheet.
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
Add an import to the scss file. Make sure to stop your server and restart after the performing these commands.
app/assets/stylesheets/application.scss
@import 'bootstrap';

Additional React Components
The React file structure lives in the app/javascript/components directory. The Rails component directory takes the place of the src directory in a typical React application.

Create three directories in your React application: assets, components, and pages.

Assets
The assets directory is used to store image files used in your application.

Components
The components directory is for helper components such as headers, footers, and buttons.

Pages
The pages directory is for full views. The full view can consist of items from the assets and components directory as well a code unique to a page.

Add Pages
Add an <h3> to each describing their intent

app/javascript/components/pages/Home.js

import React, { Component } from 'react'

class Home extends React.Component {
  render() {
    return(
      <h3>This is the Home Page</h3>
    )
  }
}

export default Home

React Router
In order to have multiple pages we need to add the React Router.

$ yarn add react-router-dom
Import the React-router and appropriate pages.

app/javascript/components/App.js

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"
Add the basic routes to allow for navigation.

app/javascript/components/App.js

<Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ AboutUs } />
    <Route path="/learn" component={ LearnMore } />
  </Switch>
</Router>

Routing Constraints
Separate the Rails routing responsibilities, and the React routing responsibilities
The Rails Router has a convenient feature that we can use to achieve separation of traffic, all HTML requests go to our React app, and everything else (JSON and JavaScript traffic)be handled normally.

config/routes.rb

Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
This states that all HTML traffic goes to home#index our React app.

Add Navigation Components
Using Reactstrap to add the navigation code.

app/javascript/components/App.js

import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Home from "./pages/Home"

class App extends React.Component{
  render(){
    return(
      <Router>
        <h1>This is a React Component</h1>
        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/learn" component={ LearnMore } />
        </Switch>
      </Router>
    )
  }
}

export default App

Update reactor-route-dom to version 5.3.0
$ bundle
$ yarn
Restart server

Should see a page with links to the pages created in the react component

Add a header and footer component with same process as the pages except these files go under the components folder with the javascript/components

Set Up RSpec and Devise
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate

Adding mailer settings
Set up the default URL options for the Devise mailer in each environment. In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:

config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Devise is a Rails gem that gives developers a collection of methods that create authorization and authentication.

Navigate to http://localhost:3000/users/sign_in and see a log in page.

Navigate to http://localhost:3000/users/sign_up and see a sign up page.

## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!