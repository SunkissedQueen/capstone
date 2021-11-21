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

In a separate terminal: $bin/webpack-dev-server

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