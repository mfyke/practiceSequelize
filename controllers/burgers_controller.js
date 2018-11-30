const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	burger.all((data)=> {
		const hbobj = {
			burgers: data
		}
		res.render("index", hbobj);
	});
});

router.post("/", (req,res) => {
	const names = Object.keys(req.body);
	const burgerToAdd = {
		name1: names[0],
		name2: names[1],
		value1: req.body.burger_name,
		value2: req.body.devoured
	}
	burger.insert(burgerToAdd, (data) => {
		res.redirect("/");
	});

});

router.put("/:id", (req,res) => {
	const condition = {
		name: Object.keys(req.params),
		value: req.params.id
	}
	const cols = {
		name: Object.keys(req.body),
		value: req.body.devoured
	}
	burger.update(cols, condition, (data) => {
		res.redirect("/");
	});
});

router.delete("/:id", (req,res) => {
	console.log(req.params);
	condition = {
		name: Object.keys(req.params),
		value: req.params.id
	}
	burger.delete(condition, (data) => {
		res.redirect("/");
	});
});



module.exports = router;