import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get("http://localhost:8000/api/workouts");
      if (response.statusText === "OK") {
        setWorkouts(response.data.workouts);
      }
      console.log(response);
    };
    fetchWorkouts();
  }, []);
  console.log(workouts);
  return (
    <div className="__home w-full mx-auto  h-[calc(100dvh-64px)] flex justify-between ">
      <div className="__workouts w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] mt-10 p-10 gap-5">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <div className="mt-10 p-10">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
