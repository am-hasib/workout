/* eslint-disable react/prop-types */
const WorkoutDetails = ({ workout }) => {
  return (
    <div className="__workoutDetails shadow-md p-3 rounded-md h-auto bg-white">
      <h4 className="font-bold text-xl mb-5" >{workout.title}</h4>
      <p className="font-mono">
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Date:</strong> {workout.updatedAt}
      </p>
    </div>
  );
};

export default WorkoutDetails;
