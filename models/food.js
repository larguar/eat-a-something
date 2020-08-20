const orm = require('../config/orm.js');

const food = {
	all: cb => {
		orm.all('foods', res => {
			cb(res);
		});
	},
	create: (cols, vals, cb) => {
		orn.create('foods', cols, vals, res => {
			cb(res);
		});
	},
	update: (objColVals, condition, cb) => {
		orm.update('foods', objColVals, condition, res => {
			cb(res);
		});
	},
	delete: (condition, cb) => {
		orm.delete('foods', condition, res => {
			cb(res);
		});
	}
};

module.exports = food;
