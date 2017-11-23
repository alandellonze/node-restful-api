'use strict';

module.exports = function(options) {

	let app = options.app;
	let entityPath = options.entityPath;
	let service = options.service;

	// common funcitons
	let handleSuccess = function(req, res, result) {
		console.log(result);

		res.json(result);
	};

	let handleError = function(req, res, error) {
		console.log(error);

		res.json(error);
	};

	// findAll
	app.route(entityPath).get(function(req, res) {
		console.log(entityPath + ' - findAll()');

		service.findAll().then((result) => {
			handleSuccess(req, res, result);
		}).catch((error) => {
			handleError(req, res, error);
		});
	});

	// get
	app.route(entityPath + '/:id').get(function(req, res) {
		console.log(entityPath + ' - get(' + req.params.id + ')');

		service.get(req.params.id).then((result) => {
			handleSuccess(req, res, result);
		}).catch((error) => {
			handleError(req, res, error);
		});
	});

	// save
	app.route(entityPath).post(function(req, res) {
		console.log(entityPath + ' - save(' + req.body.name + ')');

		service.save(req.body).then((result) => {
			handleSuccess(req, res, result);
		}).catch((error) => {
			handleError(req, res, error);
		});
	});

	// update
	app.route(entityPath + '/:id').put(function(req, res) {
		console.log(entityPath + ' - update(' + req.params.id + ', ' + req.body + ')');

		// for the id into the doc
		req.body._id = req.params.id;

		service.update(req.body).then((result) => {
			handleSuccess(req, res, result);
		}).catch((error) => {
			handleError(req, res, error);
		});
	});

	// delete
	app.route(entityPath + '/:id').delete(function(req, res) {
		console.log(entityPath + ' - delete(' + req.params.id + ', ' + req.body + ')');

		// for the id into the doc
		req.body._id = req.params.id;

		service.delete(req.body).then((result) => {
			handleSuccess(req, res, result);
		}).catch((error) => {
			handleError(req, res, error);
		});
	});

	// export controller
	return {
		handleSuccess: handleSuccess,
		handleError: handleError
	};

};
