'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	qdb.delDB(databaseName, function(res){
		console.log(res);
	});
};

test();