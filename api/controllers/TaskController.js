'use strict';

// import the Service
let entityPath = '/api/tasks';
let service = require('../services/TaskService')({});

module.exports = function(options) {

	let app = options.app;

	// extends from AbstractController
	let controller = require('./AbstractController')({
		app: app,
		entityPath: entityPath,
		service: service
	});

};
