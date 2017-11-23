'use strict';

module.exports = function(options) {

	let app = options.app;

	// add all the controllers
	require('../controllers/ExampleCustomMethodController')({ app: app });
	require('../controllers/ExampleSimpleController')({ app: app });
	require('../controllers/TaskController')({ app: app });

};
