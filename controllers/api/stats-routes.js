const router = require("express").Router();

router.get("/", (req, res) => {
	res.json("Welcome to stats-routes api endpoint");
});

module.exports = router;
