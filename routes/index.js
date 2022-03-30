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

  var overview = 'This project was a website I can use as a marketing tool to showcase my skills and various projects ive completed. To demonstrate my range of abilities to potential employers or people of interest and to serve as a hub for my various profiles whether on Github or Linkedin. Please also note this project is subject to change as its on the current process of being converted to a React, JSON stack. Please refer to my Github commit log for the project for a clearer overview of progress. All of the following content will only cover the Handlebars, Express version rather than the React conversion.'
  var projectImage =  '../Images/portfolio-thumbnail.jpg';

  const features = ['Index page with skills, about and interest summary', 'Projects page for showcasing', 'Individual pages for further detail', 'Email contact system with page'];
  const structure = ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js'];

  var target = 'The target of this project was aimed at my future prospects post graduation. Being able to use this site as a tool to showcase my skills and previous works to potential employers. Towards the coding aspect this was also an opportunity to expand my knowledge of CSS, industry conventions and web design.';
  var targetImage = '../Images/projects-page-thumbnail.JPG';

  var issues = 'Issues I found in this project include my overuse of classes and commenting, animating with CSS and JavaScript whilst making my styling engaging and satisfactory and incorrect use of media queries. More recently I found that Handlebars is limited in its capabilities when compared to the React libary. Therefore the this project is subject to be converted to JSX.';
  var issuesImage = '../Images/commit-thumbnail.JPG';

  var resolutions = 'My resolutions for this problems was to rely more of containers and element tags rather than creating separate classes too often and focusing on commenting from more of a `Why has this been used?` as oppose to `this is what it is`. Animating was a lengthy process having to consult several forums and documentation pages however I have begun to grasp transitions and keyframing with this project. The page styling and CSS had to be refactored several times (as evident in the commit logs) although my grasp of UI (user interface) ,themes and media query usage has improved.';

  res.render('projects-detailed', { title: 'Portfolio Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Arduino project page */
router.get('/arduino-project', function(req, res, next) {
  var heading = 'Arduino Unity Project';
  var overview = 'This project was a to create an Arduino game controller using electronic components of our choice and Unity game. It was part of my first year of university and is unfortunately no longer viewable as the repository has been closed. It helped me further my knowledge with Unity as well as an introduction to Arduino and its Unity plugin called Udunio. Additionally this projects other assignment gave me my first attempt at a technical poster.'
  var projectImage =  '../Images/unity-thumbnail.JPG';

  const features = ['Unity game with Arduino', 'User interaction using arduino components', 'technical poster'];
  const structure = ['Unity', 'Arduino / Uduino', 'C#'];

  var target = 'The target was too make an interactive and engaging Unity game using components applicable to an Arduino breadboard to make a game controller and to create a corresponding technical poster detailing the project. Both the Arduino controller and the Unity game had to have some form of communication in some way and the final product had to follow the design detailed in the poster. My own idea was a Arduino version of the Hasbro game bop-it with four unique inputs in each corner of the controller and a game where the user would have to match the input to the component shown.';
  var targetImage = '../Images/breadboard-thumbnail.jpg';

  var issues = 'Issue I found in this project were mainly to do with Uduino and its syntax as well as what components to use for the game. I personally found Uduino very difficult to use in correspondence with my components. As controller anything that wasn`t a simple state such as a button was very tedious and documentation I found was limited at the time. Using interesting and engaging components that were easy to apply to a Unity project was also a challenge. The components I selected were a accelerometer, photosensor, switch, button and leds. The accelerometer epically was very difficult to implement into the game.';
  var issuesImage = '../Images/arduino-technical-poster.JPG';

  var resolutions = 'Uduino and Arduino are both systems that I struggled with and am unlikely to use again. Especially seeing as I am now more web technologies focused. My technical poster skills have improved drastically as you can see in my One Messaging project. However the project stilled remained insightful to Arduino if I am ever likely to use it again in Javascript instead of C# for example.';

  res.render('projects-detailed', { title: 'Arduino Project', heading, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Student survival store project page */
router.get('/student-survival-store-project', function(req, res, next) {
  var heading = 'Student Survival Store';
  var projectLink = 'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store';
  var repoLink = 'https://github.falmouth.ac.uk/LW254830/Student-Survival-Store';

  var overview = 'This was a group project in my second year of university and was centered around a business that provided a subscription based box of student related supplies. My role was front-end development as well as documentation handling. I maintained our teams agile approach by documenting each stand-ups notes, targets, target status and any issues that occurred for that week. This project was my first time using React and therefore my development was minimal but I did create the mobile header and implemented the user profile modal.'
  var projectImage =  '../Images/student-survival-store-index.JPG';

  const features = ['Website', 'Login and registering system', 'User dashboard'];
  const structure = ['HTML', 'React', 'Tailwinds CSS', 'Javascript', 'Express.js', 'SQLite'];

  var target = 'The target was to create the business website with all the ideal functionality based on proposals each individual member had pitched and decided on. With my own original business plan and proposal presentation being centered around a job seekers website, for tech specifically. This was in-light of the Covid 19 pandemic and therefore the mass employment lead to a gap to find an available and accessable employment platform.';
  var targetImage = '../Images/student-survival-store-large.JPG';

  var issues = 'My personal issues in the project were learning React and Tailwinds as I had not used either of these previously (as somewhat mentioned). Therefore I had a steep learning curve to match my experience team members capabilities, something I am still working to achieve currently. Maintaining an Agile methodology with standup meetings and a kanban board as well as the group setting were also changes I had to adapt too. I had around 18 months experience with agile methodology at the time and I had to help the team collaberate under this scheme as well as document the process, as mentioned.';
  var issuesImage = '../Images/student-survival-store-login.JPG';

  var resolutions = 'Tailwinds I found straight forward and easy to pick up and resolved my lack of knowledge fairly quickly as a result. The same could not be said for React and that is something I am hopping to expand my knowledge on in upcoming personal projects, due to its current popularity in industry. The group dynamic worked well and all members made sure to stick to standup meetings and deadlines, based in an agile approach.';

  res.render('projects-detailed', { title: 'Student Survival Store Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET One Messaging project page */
router.get('/one-messaging-project', function(req, res, next) {
  var heading = 'One Messaging';
  var projectLink = 'https://github.falmouth.ac.uk/JH248828/2005220_Comp260-A1-A2';
  var repoLink = 'https://github.falmouth.ac.uk/JH248828/2005220_Comp260-A1-A2';

  var overview = 'This was an individual project in my second year of university. This project was centered around creating a distributed system, with a distributed system being an application distributed across multiple systems. A technical poster detailing the project we wished to create also had to be provided along with a structured report, documenting the creation of the project. The project I decided to create was a realtime messaging app.'
  var projectImage =  '../Images/one-messaging-login-thumbnail.JPG';

  const features = ['Login and registering system', 'Chat input and output interface', 'SQL storage'];
  const structure = ['HTML', 'Handlebars', 'CSS', 'Javascript', 'Express.js', 'Socket.io', 'SQLite'];

  var target = 'The target was to follow the timeline I had provided in the poster and follow it as closely as possible. Having to list the reasoning for any deviations in the report. The artifacts targets were to creating a login and registering systems where user information was stored to a database. A chat interface where multiple users could communicate with each other and a messaging system detailing the message, username and time of message.';
  var targetImage = '../Images/one-messaging-validation-thumbnail.JPG';

  var issues = 'The issue I found where the shear amount of back-end development required in this project. The front-end development was relatively easy to me and completed quickly. However creating the login and registering system and the message component proved very challenging. Due to my knowledge of Sqlite being limited and this being the most advanced authentication system I had created.';
  var issuesImage = '../Images/one-messaging-poster.JPG';

  var resolutions = 'I resolved the authentication system mainly through help from both my peers and lecturers who were able to explain the method of each key stage such as login verification or checking a hashed password against a form request. Online tutorials and documentation for socket.io helped me to creat the messaging component.';

  res.render('projects-detailed', { title: 'Student Survival Store Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET One Messaging project page */
router.get('/esports-center-project', function(req, res, next) {
  var heading = 'The Esports Center';
  var projectLink = 'https://github.falmouth.ac.uk/JH248828/Web220_A2-eSports-Center';
  var repoLink = 'https://github.falmouth.ac.uk/JH248828/Web220_A2-eSports-Center';

  var overview = 'This was a group project in my second year with the same team as the Student Survival Store project. Similarly to that project the esports center was first presented through a business plan with my team pitches their own ideas, with my own pitch being the esports center. A statistics tracking website centered around the sporting genre esports, the competitive play of video games. My own role being front-end development and design and documentation'
  var projectImage =  '../Images/esports-center-hero-thumbnail.JPG';

  const features = ['Search and filtering', 'SQL database storage', 'Registering users and local esports teams'];
  const structure = ['HTML', 'React', 'CSS', 'Material UI', 'Javascript', 'Express.js', 'MySQL'];

  var target = 'The target was to create the business website with all the ideal functionality based on the previous proposals. With is idea being my own I also had to ensure the team had direction and correct distribution on tasks according to their own strengths.l Additionally I managed the stand up meetings.';
  var targetImage = '../Images/esports-center-form-thumbnail.JPG';

  var issues = 'Being the project manager I found this new and challenging as it wasn`t an area I had much experience with previously. I found Material UI to be very complex with areas such as `sx` shorthand style and the vast amount of components. I personally prefer to use no UI libraries to create truly unique web page styling, however even if it is required I prefer bootstrap because of its simplicity and how amount of support.';
  var issuesImage = '../Images/esports-center-kanban-thumbnail.JPG';

  var resolutions = 'Towards the end of the project my issues with being the project manager where resolved naturally as it became regular to conduct standup meetings and have a constant mental overview of the project. I tried to manage my team as effectively as I could and overall this role was an engaging learning curve that I would be open to trying again. I was able to understand Material UI and use it effectively in the project however the amount of time to understand the library impacted my own abilities compared to standard styling. However I am grateful to understand a UI library specifically for React.';

  res.render('projects-detailed', { title: 'Student Survival Store Project', heading, projectLink, repoLink, overview, projectImage, features, structure, target, targetImage, issues, issuesImage, resolutions });
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET Message-sent page */
router.get('/message-sent', function(req, res, next) {
  var heading = 'Thank you';
  var message = 'Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible.'

  res.render('message', { title: 'Message Sent', heading, message });
});

module.exports = router;
