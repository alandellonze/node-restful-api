'use strict';

// import db
let dbUtil = require('../database/PouchDBUtil')({});

module.exports = function(options) {

	let entityName = options.entityName;

	// export service
  return {
    dbInfo: function() {
      return dbUtil.dbInfo();
    },

    findAll: function() {
      return dbUtil.findAll('structure/' + entityName);
    },

    get: function(docId) {
      return dbUtil.get(docId);
    },

    save: function(doc) {
      return dbUtil.save(doc);
    },

    update: function(doc) {
      return dbUtil.update(doc);
    },

    delete: function(doc) {
      return dbUtil.delete(doc);
    }
  };

};
