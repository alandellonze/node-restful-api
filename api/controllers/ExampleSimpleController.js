'use strict';

// import the Service
let entityPath = '/api/examples';
let service = require('../services/ExampleSimpleService')({});

module.exports = function(options) {

	let app = options.app;

	// extends from AbstractController
	let controller = require('./AbstractController')({
		app: app,
		entityPath: entityPath,
		service: service
	});

};
