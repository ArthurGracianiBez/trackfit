
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Workout } from "../types/workout";

interface WorkoutContextProps {
    workouts: Workout[];
    saveWorkouts: (workouts: Workout) => void;
    removeWorkouts: (id: string) => void;
} 

const WorkoutsContext = createContext<WorkoutContextProps | null>(null);

export function WorkoutsProvider({children}:{children: React.ReactNode}) {
    const [workout, setWorkout] = useState<Workout[]>([]);

    const fetchWorkouts = useCallback (async() => {
        const response = await fetch('http://localhost:4000/workouts',{
      headers: {
        'Content-type': 'application/json'
      },
      method: "GET",
    });
    const data: Workout[] = await response.json();
    setWorkout(data);
    }, []);

    useEffect(() => {
        fetchWorkouts();
    }, [fetchWorkouts]);

    const saveWorkouts = useCallback(async (workout: Workout) => {
        await fetch('http://localhost:4000/workouts',{
            method: "POST",
            body: JSON.stringify(workout),
        });

        await fetchWorkouts();
    }, []);

    const removeWorkouts = useCallback(async (id: string) => {
    fetch(`http://localhost:4000/workouts/${id}`, {
      method: "DELETE",
    });
    await fetchWorkouts();
  }, []);

    return(
        <WorkoutsContext.Provider value={{saveWorkouts, workouts: workout, removeWorkouts}}>
            {children}
        </WorkoutsContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWorkouts() {
      const ctx = useContext<WorkoutContextProps | null>(WorkoutsContext);
    if(!ctx) {
        throw new Error("useWorkouts deve ser usado dntro de WorkoutsProvider")
    }
    return ctx;
}
