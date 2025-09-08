import { useLocation, useParams } from "react-router-dom"
import { WorkoutCard } from "../components/workout-card";

export function WorkoutDetails(){
    const {id} = useParams();
    const {state} = useLocation();
    return(
        <>
        <h2>Dtealhes do terino - ID {id}</h2>
        <WorkoutCard workout={state.workout}/>
        </>
    )
}

