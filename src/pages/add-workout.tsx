import { useState } from "react";
import { WorkoutForm } from "../components/workout-form";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

export function AddWorkout(){
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    
    function addWorkout(workout: Workout): void {
        setWorkouts((prev) => [...prev, workout]);
    }
    
    return (
        <>
        <h2>Adicionar novo treino</h2>
        <WorkoutForm onAdd={addWorkout}/>
        <WorkoutList workoutList={workouts}/>
        </>
    )

}