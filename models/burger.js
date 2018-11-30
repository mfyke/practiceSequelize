const orm = require("../config/orm.js");

const burger = {
	all : (cb)=> {
		orm.selectAll("burgers", (data) => {
			cb(data);
		});
	},
	insert : (colsToAdd, cb)=> {
		orm.insertOne("burgers", colsToAdd, (data) => {
			cb(data);
		})
		
	}, 
	update : (colToEdit, condition, cb) => {
		orm.updateOne("burgers", colToEdit, condition, (data) => {
			cb(data);
		});

	},
	delete : (condition, cb) => {
		orm.deleteOne("burgers", condition, (data) => {
			cb(data);
		});
	}
}

module.exports = burger;