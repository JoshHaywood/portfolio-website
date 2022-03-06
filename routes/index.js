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
  res.render('portfolio-project', { title: 'Portfolio Project' });
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* POST Message-sent page */
router.post('/message-sent', function(req, res, next) {
  var heading = 'Thank you';
  var message = 'Your message has been sent succesfully. You will recieve a reply to the email you provided as soon as possible.'

  res.render('message', { title: 'Message Sent', heading, message });
});

module.exports = router;
