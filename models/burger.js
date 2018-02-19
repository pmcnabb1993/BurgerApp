// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burger_name, cb){
      orm.insertOne(burger_name, function(res){
          cb(res);
      });
    },
    update: function(burger_name, cb) {
      orm.update(id, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burger", condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;