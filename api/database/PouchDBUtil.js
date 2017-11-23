'use strict';

let PouchDB = require('pouchdb');
let dbName = process.env.DB_NAME || 'db/node-restful-api';
let db = new PouchDB(dbName);
console.log('db "' + dbName + '" up and running');

// FIXME move this in each Service and use the initDB method
let designStructure = {
  _id: '_design/structure',
  views: {
    tasks: {
      map: 'function(doc) { emit(doc.title, doc); }'
    },
    examples: {
      map: 'function(doc) { emit(doc.title, doc); }'
    }
  }
};
db.post(designStructure).catch((error) => {
  console.log('error during db initialization: ' + error);
});
// FIXME move this in each Service and use the initDB method

module.exports = function(options) {
	// export db utility
	return {
		dbInfo: function() {
		  return db.info();
		},

		// FIXME make a more complex logic that check the differences and apply a replace
		initDB: function(designStructure) {
		  return db.post(designStructure);
		},

		findAll: function(query) {
		  return db.query(query);
		},

		get: function(docId) {
		  return db.get(docId);
		},

		save: function(doc) {
		  return db.post(doc);
		},

		update: function(doc) {
		  return db.put(doc);
		},

		delete: function(doc) {
		  return db.remove(doc);
		}
	};

};
