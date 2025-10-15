import { TableWorkouts } from "../components/table-component";
import { useWorkouts } from "../context/workout-context";

export function TablePage() {
    const { workouts} = useWorkouts();
    return(
        <>
        <TableWorkouts workoutList={workouts}/>
        </>
    )
}
