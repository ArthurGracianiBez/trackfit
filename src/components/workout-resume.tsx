import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";
interface WorkoutResumeProp{
    workout: Workout
}

export function WorkoutResume({workout}: WorkoutResumeProp){
    return(
        <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 
        bg-white mb-3 hover:p-5 transition delay-150">
            <div className="flex justify-between ">
             <h2 className="font-bold text-gray-600">{workout.title}</h2>
             <Link className="button-white" to={`/workout/${workout.id}`}
             state={{workout}}>
                Detalhes</Link>
            </div>

            <h3>Data: {workout.date}</h3>
        </div>
    )
}