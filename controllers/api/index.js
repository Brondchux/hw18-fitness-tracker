const router = require("express").Router();
const statsRoutes = require("./stats-routes");
const workoutRoutes = require("./workout-routes");
const exerciseRoutes = require("./exercise-routes");

router.use("/stats", statsRoutes);
router.use("/workouts", workoutRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
