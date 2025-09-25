import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface WorkoutResumeProps {
  workout: Workout;
  removeWorkout: (id: string) => void;
}

export function WorkoutResume({ workout, removeWorkout }: WorkoutResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{workout.title}</h2>

        <div className="flex flex-col gap-2">
          <Link
            to={`/workout/${workout.id}`}
            state={{ workout }}
            className="button-blue"
          >
            Detalhes
          </Link>

          <button
            className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded"
            onClick={() => removeWorkout(workout.id)}
          >
            Remover treino
          </button>
        </div>
      </div>

      <h3>Data: {workout.date}</h3>
    </div>
  );
}