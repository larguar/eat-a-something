const connection = require('../config/connection.js');

// creates a ? for each item being passed – e.g. ['?', '?', '?'].toString() would return '?,?,?'
function printQuestionMarks(num) {
	const arr = [];
	for (let i of num) {
		arr.push('?');
	}
	return arr.toString();
}

// convert object key/value pairs to SQL
function objectToSql(objName) {
	const arr = [];
	for (let key in objName) {
		let value = objName[key];
		if (Object.hasOwnProperty.call(objName, key)) {
			if (typeof value === 'string' && value.indexOf(' ') >= 0) {
				value = `'${value}'`;
			}
			arr.push(`${key}=${value}`);
		}
	}
	return arr.toString();
}

const orm = {
	all: (table, cd) => {
		const queryString = `SELECT * FROM ${table}`;
		console.log('orm all queryString:', queryString);
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	create: (table, cols, vals, cb) => {
		const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
		console.log('orm create queryString:', queryString);
		connection.query(queryString, vals, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	update: (table, objColVals, condition, cb) {
		const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
		console.log('orm update queryString:', queryString);
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	},
	delete: (table, condition, cb) {
		const queryString = `DELETE FROM ${table} WHERE ${condition}`;
		console.log('orm delete queryString:', queryString);
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;
