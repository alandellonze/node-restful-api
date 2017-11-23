'use strict';

module.exports = function(options) {

	// extends from AbstractService
	let service = require('./AbstractService')({
		entityName: 'examples'
	});

	// add custom methods
	service.customMethod = function() {
	  return service.dbInfo();
	};

	// export the service
	return service;

};
