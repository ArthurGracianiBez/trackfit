import type { Workout } from "../types/workout";
import { WorkoutCard } from "./workout-card";

interface WorkoutListProps {
  workoutList: Workout[];
}

export function WorkoutList({ workoutList }: WorkoutListProps) {
  return (
    <>
      <h2>List de treinos</h2>

      {workoutList.map((value) => {
        return <WorkoutCard workout={value} />;
      })}
    </>
  );
}