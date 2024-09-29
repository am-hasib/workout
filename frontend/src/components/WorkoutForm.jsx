import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="bg-white p-4 min-w-[350px] rounded-md">
      <form className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Workout Form</h1>
        <div className="flex justify-between ">
          <label htmlFor="title" className="font-bold text-base">
            TItle:{" "}
          </label>
          <input
            type="text"
            name="title"
            className="min-w-[200px] rounded focus:outline-none outline-none border px-2 py-1 border-gray-400"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between ">
          <label htmlFor="load" className="font-bold text-base">
            Load (kg):
          </label>
          <input
            type="text"
            name="load"
            className="w-[200px] rounded focus:outline-none outline-none border px-2 py-1 border-gray-400"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between ">
          <label htmlFor="reps" className="font-bold text-base">
            Reps:{" "}
          </label>
          <input
            type="text"
            name="reps"
            className="w-[200px] rounded focus:outline-none outline-none border px-2 py-1 border-gray-400"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn  rounded-md" type="submit">
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
