const calculateDuration = (workouts) => {
	const modifiedWorkouts = workouts.map((workout) => {
		let sumDuration = 0;
		workout.exercises.map((exercise) => {
			sumDuration += exercise.duration;
		});
		let modifiedExercise = { ...workout._doc, totalDuration: sumDuration };
		return modifiedExercise;
	});
	return modifiedWorkouts;
};

module.exports = { calculateDuration };
