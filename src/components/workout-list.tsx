import { useMemo } from "react";
import type { Workout } from "../types/workout";
import { WorkoutResume } from "./workout-resume";

interface WorkoutListProps {
  workoutList: Workout[];
  removeWorkout: (id: string) => void;
}

export function WorkoutList({ workoutList, removeWorkout }: WorkoutListProps) {
  const workoutTotal = useMemo(() => {
    return workoutList.length;
  }, [workoutList]);

  return (
    <>
      <h3>Total de treinos: {workoutTotal}</h3>
      <h2 className="font-bold text-gray-600 text-xl mb-3">Lista de treinos</h2>

      {workoutList.map((value) => {
        return <WorkoutResume removeWorkout={removeWorkout} workout={value} />;
      })}
    </>
  );
}