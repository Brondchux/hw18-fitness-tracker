const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", async (req, res) => {
	await Workout.find({}, (err, data) => {
		if (err) return res.json({ err });
		return res.json(data);
	});
});

router.post("/", (req, res) => {
	res.json({ ...req.body, message: "Workouts post api endpoint" });
});

module.exports = router;
