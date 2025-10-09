import { useEffect, useState } from "react";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

export function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/workouts',{
      headers: {
        'Content-type': 'application/json'
      },
      method: "GET",
    })
    .then((data) => data.json())
    .then((data: Workout[]) => setWorkouts(data))
  },[workouts])

  return (
    <>
      <WorkoutList workoutList={workouts} />
    </>
  );
}