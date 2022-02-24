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

/* GET Message-sent page */
router.get('/message-sent', function(req, res, next) {
  res.render('message-sent', { title: 'Message Sent' });
});

module.exports = router;
