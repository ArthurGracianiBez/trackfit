import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

interface HomeProps {
  workouts: Workout[];
  removeWorkout: (id: string) => void;
}

export function Home({ workouts, removeWorkout }: HomeProps) {
  return (
    <>
      <WorkoutList removeWorkout={removeWorkout} workoutList={workouts} />
    </>
  );
}