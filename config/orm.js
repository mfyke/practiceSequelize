const connection = require('./connection.js');

const orm = {
	selectAll : (table,cb) => {
		const queryString = `select * from ${table};`;
		connection.query(queryString, (error, results, fields) => {
			if (error) {
				throw error;
			}
  			cb(results);
		});
	},
	insertOne : (table,colsToAdd, cb) => {
		const queryString = `insert into ${table} (${colsToAdd.name1}, ${colsToAdd.name2}) values ('${colsToAdd.value1}', ${colsToAdd.value2});`;
		console.log(queryString);
		connection.query(queryString, (error, results, fields) => {
  			if (error) {
  				throw error
  			}
  			cb(results);
		});
	},
	updateOne : (table,colsToEdit,condition,cb) => {
		const queryString = `update ${table} set ${colsToEdit.name} = ${colsToEdit.value} where ${condition.name} = ${condition.value};`;
		connection.query(queryString, (error, results, fields) => {
  			if (error) {
  				throw error
  			}
  			cb(results);
		});
	},
	deleteOne : (table, conditon, cb) => {
		const queryString = `delete from ${table} where ${condition.name} = ${condition.value};`;
		connection.query(queryString, (error, results, fields) => {
			if (error) {
				throw error
			}
			cb(results);
		});
	}
};

module.exports = orm;
