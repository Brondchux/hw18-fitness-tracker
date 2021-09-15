const router = require("express").Router();
const { Workout } = require("../../models");
const { calculateDuration } = require("./duration");

router.get("/", async (req, res) => {
	const workouts = await Workout.find(
		{},
		null,
		{ sort: { _id: -1 }, limit: 1 },
		() => {}
	);
	const modifiedWorkouts = calculateDuration(workouts);
	res.json(modifiedWorkouts);
});

router.get("/range", async (req, res) => {
	const workouts = await Workout.find({}, null, { limit: 7 }, () => {});
	const modifiedWorkouts = calculateDuration(workouts);
	res.json(modifiedWorkouts);
});

router.put("/:id", async (req, res) => {
	await Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } },
		{ new: true },
		(err, data) => {
			if (err) return res.json({ err });
			return res.json(data);
		}
	);
});

router.post("/", async ({ body }, res) => {
	await Workout.create(body, (err, data) => {
		if (err) return res.json({ err });
		return res.json(data);
	});
});

module.exports = router;
