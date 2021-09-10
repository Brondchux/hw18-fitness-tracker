const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
	type: { type: String, required: "Select the type of workout exercise!" },
	name: { type: String },
	weight: { type: Number },
	sets: { type: Number },
	reps: { type: Number },
	distance: { type: Number },
	duration: { type: Number },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
