import { WorkoutList } from "../components/workout-list";
import { useWorkouts } from "../context/workout-context";

export function Home() {
const { workouts} = useWorkouts();
  return (
    <>
      <WorkoutList workoutList={workouts} />
    </>
  );
}