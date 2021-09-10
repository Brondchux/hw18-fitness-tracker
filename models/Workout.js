const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
	day: { type: Date },
	exercises: [
		{
			type: { type: String, required: "Select the type of workout exercise!" },
			name: { type: String },
			duration: { type: Number },
			weight: { type: Number },
			reps: { type: Number },
			sets: { type: Number },
			distance: { type: Number },
		},
	],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
