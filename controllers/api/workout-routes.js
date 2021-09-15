const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", async (req, res) => {
	const workouts = await Workout.find(
		{},
		null,
		{ sort: { _id: -1 }, limit: 1 },
		() => {}
	);

	const modifiedWorkouts = workouts.map((workout) => {
		let sumDuration = 0;
		workout.exercises.map((exercise) => {
			sumDuration += exercise.duration;
		});
		let modifiedExercise = { ...workout._doc, totalDuration: sumDuration };
		return modifiedExercise;
	});
	res.json(modifiedWorkouts);
});

router.get("/range", async (req, res) => {
	await Workout.find({}, null, { limit: 7 }, (err, data) => {
		if (err) return res.json({ err });
		return res.json(data);
	});
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
