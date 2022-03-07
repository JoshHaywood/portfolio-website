var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Josh Haywood | Portfolio' });
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Portfolio project page */
router.get('/portfolio-project', function(req, res, next) {
  var heading = 'Portfolio';
  var projectLink = 'https://www.joshhaywood-portfolio.com/';
  var repoLink = 'https://github.com/El-Goblino/portfolio-website';

  var overview = 'This project was a website I can use as a marketing tool to showcase my skills and various projects ive completed. To demonstrate my range of abilities to potenial employers or people of interest.'
  var projectImage =  '../Images/portfolio-thumbnail.jpg';

  const features = ['Index page with skills, about and interest summary', 'Projects page for showcasing', 'Individual pages for further detail', 'Email contact system with page'];
  const structure = ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js'];

  var target = 'The target of this project was aimed at my future prospects post graduation. Being able to use this site as a tool to showcase my skills and previous works to potenial employers. Towards the coding aspect this was also an oppurtunity to expand my knowledge of CSS, industry conventions and web design.';
  var targetImage = '../Images/projects-page-thumbnail.JPG';

  var issues = 'Issues I found in this project include my overuse of classes and commenting, animating with CSS and JavaScript whilst making my styling engaging and satisfactory and incorrect use of media querys.';
  var issuesImage = '../Images/commit-thumbnail.JPG';

  var resolutions = 'My resolutions for this problems was to rely more of containers and element tags rather than creating seperate classes too often and focusing on commenting from more of a `Why has this been used?` as opose to `this is what it is`. Animating was a lengthly process having to consult several forums and documentation pages however I have begun to grasp transitions and keyframing with this project. The page styling and CSS had to be refactored several times (as evident in the commit logs) although my grasp of UI (user interface) ,themes and media query usage has improved.';

  res.render('projects-detailed', { title: 'Portfolio Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Arduino project page */
router.get('/arduino-project', function(req, res, next) {
  var heading = 'Arduino Unity Project';
  var overview = 'This project was a arduino controller and unity game. It was part of my first year of university and is unfortunately no longer viewable. It helped me further my knowledge with Unity as well as an introduction to Arduino and its Unity plugin called Udunio. Additionally this projects other assignment gave me my first attempt at a technical poster.'
  var projectImage =  '../Images/unity-thumbnail.JPG';

  const features = ['Unity game with Arduino', 'User interaction using arduino components', 'technical poster'];
  const structure = ['Unity', 'Arduino / Uduino', 'C#'];

  var target = 'The target was too make an interactive and engaging Unity game using components applicable to an Arduino breadboard to make a game controller and to create a corresponding techincal poster detailing the project.';
  var targetImage = '../Images/breadboard-thumbnail.jpg';

  var issues = 'Issue I found in this project were mainly to do with Uduino and its syntax as well as what components to use for the game. I personally found Uduino very difficult to use in correspondance with my components as well as using interesting components that were easy to apply to a Unity project.';
  var issuesImage = '../Images/arduino-technical-poster.JPG';

  var resolutions = 'Uduino and Arduino are both systems that I struggled with and am unlikely to use again. Espically seeing as I am now more web technologies focused. My technical poster skills have improved drastically as you can see in my One Messaging project.';

  res.render('projects-detailed', { title: 'Arduino Project', heading, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Student survival store project page */
router.get('/student-survival-store-project', function(req, res, next) {
  var heading = 'Student Survival Store';
  var projectLink = 'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store';
  var repoLink = 'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store';

  var overview = 'This was a group project in my second year of university and was centered around a buisness that provided a subscription based box of student related supplies. My role was front-end development as well as documentation handling.'
  var projectImage =  '../Images/student-survival-store-index.JPG';

  const features = ['Website', 'Login and registering system', 'User dashboard'];
  const structure = ['HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'SQLite'];

  var target = 'The target was to create the buisness website with all the ideal functionality based on proposols each individual member had pitched and decided on.';
  var targetImage = '../Images/student-survival-store-large.JPG';

  var issues = 'My personal issues in the project were learning React and Tailwinds as I had not used either of these previously. Maintaining an Agile methodology with standup meetings and a kanban board as well as the group setting were also changes I had to adapt too.';
  var issuesImage = '../Images/student-survival-store-login.JPG';

  var resolutions = 'Tailwinds I found straight foward and easy to pick up and resolved my lack of knowledge fairly quickly as a result. The same could not be said for React and that is something I am happending to expand my knowledge on in upcoming projects. The group dynamic worked well and all members made sure to stick to standup meetings and deadlines.';

  res.render('projects-detailed', { title: 'Student Survival Store Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET Message-sent page */
router.get('/message-sent', function(req, res, next) {
  var heading = 'Thank you';
  var message = 'Your message has been sent succesfully. You will recieve a reply to the email you provided as soon as possible.'

  res.render('message', { title: 'Message Sent', heading, message });
});

module.exports = router;
