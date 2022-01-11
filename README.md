# Portfolio Website

This project is a portfolio website to showcase my previous, current and future projects.
The project features a website to present these projects.
The project is created using Express.js back-end and a Handlebars layout for a HTML front-end.

## Main Features

The main target features of the project are: 
- Index page with a brief description of myself, my background and future aspirations.
- Links and showcases of all previous projects I have worked on and a link to their repositories on GitHub.
- Admin log in system for to add new posts without having to open the project in an IDE.
- SQLite3 database used for storing the projects in the format: 'Name', 'Description', 'Image', 'Link'. Which using the log in system the admin can edit or delete.

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

1. Firstly download the correct build if you haven’t already from [GitHub](https://github.com/El-Goblino/portfolio-website.)
Builds are found on the 'main' branch under the 'builds' folder with the highest number collectively in the format '0.0.0' being the latest build.

2. If you have downloaded the optional repository browser clone the repository and pull.
If you haven’t downloaded the repository browser download a zip folder from the repository under 'code' tab then the 'code' dropdown button then click download zip.
Then extract the folder somewhere in your files.

3. If you are using an IDE open the entire project folder in the IDE. If you aren’t skip to the next step.

4. Within the project folder open your CLI by navigating to where you have stored the project folder.

5. Enter the following into your CLI. (This was done using GitBash and therefore commands might differ.)

`$ npm install`

`$ npm start`

6. Finally enter the local URL (http:localhost:3000) into your web browser.

## Commit Message Key

** If any words used in the commit log used before the content of the message are unfamilar refer to this key **

feat: A feature that has been added.
fix: Bug fix.
docs: Changes relating to documentation.
style: Formatting, missing code, white space (This only applys to code not CSS for example.)
refactor: Maintainabilty or a functions method has been altered.
dep: Dependancies added to the project.

## Roadmap

** Specific dates cannot be given for the roadmap due to this being a personal and none time dependant project **

### Initial Creation

- Create repo with ignore, license and readme files.
- Update readme to include all initial information required.

### Documentation

- Construct wireframes.
- Document theming and colour schemes.
- Create site map diagram.
- Reference any external assets.

### Pre Build Creation

- Apply previously mentioned documentation to construct first build of project.
- User test first build.
- Apply data from user test.
- Use metric tools and document.
- Apply metric data to build.

### Release Build 1.0.0

- Release first build under '1.0.0'.


