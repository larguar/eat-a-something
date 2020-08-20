const express = require('express');
const router = express.Router();

const food = require('../models/food.js');

router.get('/', (req, res) => {
	food.all(data => {
		const hbObject = {
			foods: data	
		};
		console.log('foodsController hbObject:', hbObject);
		res.render('index', hbObject);
	});
});

router.post('/api/foods', (req, res) {
	food.create(['restaurant', 'foodItem', 'eaten'], [req.body.restaurant, req.body.foodItem, req.body.eaten], result => {
		res.json({ id: result.insertId });
	});
});

router.put('/api/foods/:id', (req, res) => {
	const condition = `id = ${req.params.id}`;
	console.log('foodsController router.put condition:', condition);
	food.update({ eaten: req.body.eaten }, condition, result => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.delete('/api/foods/:id', (req, res) => {
	const condition = `id = ${req.params.id}`;
	console.log('foodsController router.delete condition:', condition);
	food.delete(condition, result => {
		if (result.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
