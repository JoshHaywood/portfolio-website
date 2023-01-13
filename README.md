# Portfolio Website

This project is a portfolio website to showcase my previous, current and future projects.
The project features a React / Tailwind application to present these projects.
Please note the documentation centers around the original design and stack created with Handlebars and Express.JS.
My reasoning for maintaining the original documentation is to showcase how I have adapted and altered this project over time.
My justification can be found: https://www.joshhaywood-portfolio.com/projects/portfolio

## Contents

- [Portfolio Website](#portfolio-website)
  - [Contents](#contents)
  - [Main Features](#main-features)
  - [Repository Layout](#repository-layout)
    - [Main](#main)
    - [Application](#application)
    - [Documentation](#documentation)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [User Guide](#user-guide)
  - [Commit Message Key](#commit-message-key)


## Main Features

The main target features of the original concept are: 
- Index page with a brief description of myself, my background, current works, future aspirations and experience.
- Links and showcases of featured projects I have worked on and a link to their repositories on GitHub and live site where applicable.
- Admin log in system for to add new posts without having to open the project in an IDE.
- SQLite3 database used for storing the projects in the format: 'Name', 'Description', 'Image', 'Link'. Which using the log in system the admin can edit or delete.

The current project features are:
- Index page with a brief description of myself, my background and future aspirations.
- Links and showcases of all previous projects I have worked on and a link to their repositories on GitHub.
- Admin log in system scrapped as its not required in this scope.
- Project storage included in JSON files and managed through React props and mapping.

## Repository Layout

### Main

This branch contains:

- Project builds.
- License.
- Readme file.

### Application

This branch contains:

- All application related source code both front-end and back-end.

### Documentation

This branch contains:

- Wireframes
- Site theme
- Site font
- Referencing for assets

## Installation

### Prerequisites

- Node Package Manager [Nodejs](https://nodejs.org/en/download/)
- File manager (File explorer recommended for windows users.)
- Web browser (Google Chrome is recommended.)
- Integrated Development Environment (IDE) (Visual Studio Code is recommended (https://code.visualstudio.com/download))
- Command Line Interface (CLI) (Git Bash is recommended (https://git-scm.com/downloads))

** Optional **

- Repository Browser (Recommended GitHub desktop (https://desktop.github.com/))

### User Guide

1. Firstly download the correct build if you haven’t already from [GitHub](https://github.com/JoshHaywood/portfolio-website)
Builds are found on the 'main' branch under the 'builds' folder with the highest number collectively in the format '0.0.0' being the latest build.

2. If you have downloaded the optional repository browser clone the repository and pull.
If you haven’t downloaded the repository browser download a zip folder from the repository under 'code' tab then the 'code' dropdown button then click download zip.
Then extract the folder somewhere in your files.

3. If you are using an IDE open the entire project folder in the IDE. If you aren’t skip to the next step.

4. Within the project folder open your CLI by navigating to where you have stored the project folder.

5. Enter the following into your CLI. (This was done using GitBash and therefore commands might differ.)

`$ npm install`

`$ npm run dev`

or

`$ react-scripts build`
`$ serve -s build` for Reacts's production mode.

6. Finally enter the local URL (http:localhost:3000) into your web browser.

## Commit Message Key

** If any words used in the commit log used before the content of the message are unfamilar refer to this key **

- feat: A feature that has been added.
- fix: Bug fix.
- docs: Changes relating to documentation.
- style: Formatting, missing code, white space (This doesnt apply to CSS.)
- refactor: Maintainabilty or a functions method has been altered.
- dep: Dependancies added to the project.
- chore: Miscellaneous such as altering assets.
- del: Deleted or removed unused code, files or other assets.


