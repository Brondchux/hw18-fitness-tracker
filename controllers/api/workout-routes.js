const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", async (req, res) => {
	await Workout.find({}, (err, data) => {
		if (err) return res.json({ err });
		return res.json(data);
	});
});

router.put("/:id", async (req, res) => {
	const updatedExercises = await Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } },
		{ new: true },
		(err, data) => {
			console.log(data);
			res.json(data);
		}
	);
});

module.exports = router;
