const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// configure bodyParser for http data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add all the controllers
require('./api/main/Main')({ app: app });

// set fallback
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// startup the server
app.listen(port);
console.log('RESTfulAPITutorial server started on port: ' + port);
