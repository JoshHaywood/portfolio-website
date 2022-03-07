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
  var overview = 'This project was a website I can use as a marketing tool to showcase my skills and various projects ive completed. To demonstrate my range of abilities to potenial employers or people of interest.'
  var projectImage =  '../Images/portfolio-thumbnail.jpg';

  const features = ['Index page with skills, about and interest summary', 'Projects page for showcasing', 'Individual pages for further detail', 'Email contact system with page'];
  const structure = ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js'];

  var target = 'The target of this project was aimed at my future prospects post graduation. Being able to use this site as a tool to showcase my skills and previous works to potenial employers. Towards the coding aspect this was also an oppurtunity to expand my knowledge of CSS, industry conventions and web design.';
  var targetImage = '../Images/projects-page-thumbnail.JPG';

  var issues = 'Issues I found in this project include my overuse of classes and commenting, animating with CSS and JavaScript whilst making my styling engaging and satisfactory and incorrect use of media querys.';
  var issuesImage = '../Images/commit-thumbnail.JPG';

  var resolutions = 'My resolutions for this problems was to rely more of containers and element tags rather than creating seperate classes too often and focusing on commenting from more of a `Why has this been used?` as opose to `this is what it is`. Animating was a lengthly process having to consult several forums and documentation pages however I have begun to grasp transitions and keyframing with this project. The page styling and CSS had to be refactored several times (as evident in the commit logs) although my grasp of UI (user interface) ,themes and media query usage has improved.';


  res.render('projects-detailed', { title: 'Portfolio Project', heading, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
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
