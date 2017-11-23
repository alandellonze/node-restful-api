'use strict';

module.exports = function(options) {

	// extends from AbstractService
	let service = require('./AbstractService')({
		entityName: 'tasks'
	});

	// export the service
	return service;

};
