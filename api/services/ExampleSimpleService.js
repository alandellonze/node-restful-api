'use strict';

module.exports = function(options) {

	// extends from AbstractService
	let service = require('./AbstractService')({
		entityName: 'examples'
	});

	// export the service
	return service;

};
