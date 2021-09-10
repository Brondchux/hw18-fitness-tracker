const router = require("express").Router();
const path = require("path");

// GET: Home page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "/exercise.html"));
});

// GET: Stats page
router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "/stats.html"));
});

// GET: Exercise page
router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "/exercise.html"));
});

module.exports = router;
