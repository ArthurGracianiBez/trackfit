import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";
import { useWorkouts } from "../context/workout-context";

interface WorkoutListProps {
  workoutList: Workout[];
}

export function TableWorkouts({ workoutList }: WorkoutListProps) {
      const { removeWorkouts } = useWorkouts();
    return(
        <>
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
                <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                    <tr>

                        <th className="px-6 py-3 text-left"></th>
                        <th className="px-6 py-3 text-left">Titulo</th>
                        <th className="px-6 py-3 text-left">Duração</th>
                        <th className="px-6 py-3 text-left">Intensidade</th>
                        <th className="px-6 py-3 text-left">Data</th>       
                    </tr>
                </thead>    
                <tbody>
                    {workoutList.map((workout) => (
                        <tr key={workout.id} className="border-t hover:bg-gray-50 transition-colors">
                            <Link
                            to={`/workout/${workout.id}`}
                            state={{ workout }}
                            className="button-blue"
                        >
                            Detalhes
                        </Link>
                        
                        <button
                            className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded"
                            onClick={() => removeWorkouts(workout.id)}
                        >
                            Remover treino
                        </button>
                        
                            <td className="px-6 py-3">{workout.title}</td>
                            <td className="px-6 py-3">{workout.durationMinutes}</td>
                            <td className="px-6 py-3">{workout.intensity}</td>
                            <td className="px-6 py-3">{workout.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
