import type { Workout } from "../types/workout";
import { WorkoutResume } from "./workout-resume";

interface WorkoutListProps {
  workoutList: Workout[];
}

export function WorkoutList({ workoutList }: WorkoutListProps) {
  return (
    <>
      <h2 className="font-bold text-gray-800 text-xl mb-3">Lista de treinos</h2>

      {workoutList.map((value) => {
        return <WorkoutResume workout={value} />;
      })}
    </>
  );
}