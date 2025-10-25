
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Workout } from "../types/workout";
import { API_TRACKFIT } from "../api/trackfit-api";
import type { AuthUser } from "../types/auth-user";

interface WorkoutContextProps {
    workouts: Workout[];
    saveWorkouts: (workouts: Workout) => Promise<void>;
    removeWorkouts: (id: string) => Promise<void>;
    fetchWorkouts: () => Promise<void>;
} 

const WorkoutsContext = createContext<WorkoutContextProps | null>(null);

export function WorkoutsProvider({children}:{children: React.ReactNode}) {
    const [workout, setWorkout] = useState<Workout[]>([]);

    const fetchWorkouts = useCallback (async() => {
      const item = localStorage.getItem("user");

      if(!item){
        return;
      }

      const { id } = JSON.parse(item) as AuthUser;

        const response = await fetch(`${API_TRACKFIT}/workouts?userId=${id}`,{
      headers: {
        'Content-type': 'application/json'
      },
      method: "GET",
    });

    const data: Workout[] = await response.json();

    setWorkout(data);
    }, []);

    const saveWorkouts = useCallback(async (workout: Workout) => {
        await fetch(`${API_TRACKFIT}/workouts`,{
            method: "POST",
            body: JSON.stringify(workout),
        });

        await fetchWorkouts();
    }, []);

    const removeWorkouts = useCallback(async (id: string) => {
    await fetch(`${API_TRACKFIT}/workouts/${id}`, {
      method: "DELETE",
    });
    await fetchWorkouts();
  }, []);

    return(
        <WorkoutsContext.Provider value={{saveWorkouts, workouts: workout, removeWorkouts, fetchWorkouts}}>
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
