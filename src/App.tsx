import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { lazy, Suspense, useCallback, useState } from "react";
import { Loading } from "./components/loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error-fallback";
import type { Workout } from "./types/workout";

const Home = lazy(() => import("./pages/home").then(module => ({default: module.Home})))
const AddWorkout = lazy(() => import("./pages/add-workout").then(module => ({default: module.AddWorkout})))
const WorkoutDetails = lazy(() => import("./pages/workout-details").then(module => ({default: module.WorkoutDetails})))
const NotFound = lazy(() => import("./pages/not-found").then(module => ({default: module.NotFound})))

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = useCallback((workout: Workout) => {
    setWorkouts((prev) => [...prev, workout]);
  }, []);

  const removeWorkout = useCallback((id: string) => {
    setWorkouts((prev) => {
      // procura se o item existe na lista
      const workoutToDelete = prev.some((workout) => workout.id === id);

      if (workoutToDelete) {
        // filtra todos os itens diferentes do que existe na lista
        const newWorkouts = prev.filter((workout) => workout.id !== id);

        return newWorkouts;
      }

      // se não existir, retorna a lista sem alterações
      return prev;
    });
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home removeWorkout={removeWorkout} workouts={workouts} />
                }/>
              
              <Route
                path="/add"
                element={<AddWorkout onAdd={addWorkout} workouts={workouts} />}
              />
              <Route path="/workout/:id" element={<WorkoutDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
