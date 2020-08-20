const express = require('express');
const router = express.Router();

const food = require('../models/food.js');

router.get('/', (req, res) => {
	food.all((data) => {
		const hbsObject = { foods: data };
		res.render('index', hbsObject);
	});
});

router.post('/api/foods', (req, res) => {
	food.create(['restaurant', 'foodItem', 'devoured'], [req.body.restaurant, req.body.foodItem, req.body.devoured], (result) => {
		res.json({ id: result.insertId });
	});
});

router.put('/api/foods/:id', (req, res) => {
	const condition = `id = ${req.params.id}`;
	food.update({ devoured: req.body.devoured }, condition, (result) => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
