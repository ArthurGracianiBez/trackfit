import { useCallback, useMemo, useState } from "react";
import { WorkoutForm } from "../components/workout-form";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

export function AddWorkout() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = useCallback((workout: Workout) => {
    setWorkouts((prev) => [...prev, workout]);
  }, []);

  const workoutMinutes = useMemo(() => {
    let workoutMinutesRealized: number = 0;

    workouts.forEach((value) => {
      workoutMinutesRealized += value.durationMinutes;
    });

    const hours = Math.floor(workoutMinutesRealized / 60);
    const minutes = workoutMinutesRealized % 60;

    return `${hours}:${minutes}`;
  }, [workouts]);

  const removeWorkout = useCallback((id: string) => {
    setWorkouts((prev) => {
      // procura se o item existe na lista
      const workoutToDelete = prev.some((workout) => workout.id === id);

      if (workoutToDelete) {
        // filtra todos os itens diferentes do que existe na lista
        const newWorkouts = prev.filter((workout) => workout.id !== id);

        return newWorkouts;
      }

      // se não existir, retorna a lista sem alterações
      return prev;
    });
  }, []);

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar novo treino
      </h2>

      <h3>Tempo de treino: {workoutMinutes}</h3>

      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList removeWorkout={removeWorkout} workoutList={workouts} />
    </>
  );
}