const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	console.log(req);
	db.burgers.findAll().then((data)=>{
		const hbsObj = {
			burgers: data
		}
		res.render("index", hbsObj);	
	});
});

router.post("/", (req,res) => {	
	db.burgers.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	}).then(() => {
		res.redirect("/");
	});
});

router.put("/:id", (req,res) => {
	db.burgers.update({
		devoured: req.body.devoured
	},
	{
		where: {id: req.params.id}
	}).then(() => {
		res.redirect("/");
	});
});

router.delete("/:id", (req,res) => {	
	db.burgers.destroy({
		where: {
			id: req.params.id
		}
	}).then(()=> {
		res.redirect("/");
	});
});



module.exports = router;