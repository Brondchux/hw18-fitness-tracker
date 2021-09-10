const router = require("express").Router();

router.get("/", (req, res) => {
	res.json("Welcome to workout-routes api endpoint");
});

router.post("/", (req, res) => {
	res.json({ ...req.body, message: "Workouts post api endpoint" });
});

module.exports = router;
