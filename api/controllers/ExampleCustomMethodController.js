'use strict';

// import the Service
let entityPath = '/api/examples';
let service = require('../services/ExampleCustomMethodService')({});

module.exports = function(options) {

	let app = options.app;

	// extends from AbstractController
	let controller = require('./AbstractController')({
		app: app,
		entityPath: entityPath,
		service: service
	});

	// add custom methods
	app.route('/api/customMethod').get(function(req, res) {
		console.log('customMethod()');

		service.customMethod().then((result) => {
			controller.handleSuccess(req, res, result);
		});
	});

};
