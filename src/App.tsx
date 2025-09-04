import { useState } from "react";
import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";
import { WorkoutForm } from "./components/workout-form";
import type { Workout } from "./types/workout";
import { WorkoutList } from "./components/workout-list";

function App() {
  const [listWorkout, setListWorkout] = useState<Workout[]>([]);

  function addWorkout(workout: Workout): void{
    setListWorkout((previous)=> [...previous, workout])
  }

  return (
    <>
      <Header />

      <main>
        <WorkoutForm onAdd={addWorkout}/>
        <WorkoutList workoutList={listWorkout} />
      </main>
    </>
  );
}

export default App;
