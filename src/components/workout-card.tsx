import type { Workout } from "../types/workout";
 
interface WorkoutCardProps {
  workout: Workout;
}
 
export function WorkoutCard({workout}: WorkoutCardProps) {
  return (
    <>
      <div className="bg-white shadow rounded-lg p-4 w-3/5 hover:p-5 transition delay-150">
        <h2 className="text-lg font-bold text-blue-600">{workout.title}</h2>
        <p className="text-gray-600">Duração: {workout.durationMinutes} min</p>
        <p className="text-gray-600">Intensidade: {workout.intensity}/5</p>
        <p className="text-gray-600">Data: {workout.date}</p>
        <p className="text-gray-600">Anotações: {workout.notes}</p>
      </div>
    </>
  );
}