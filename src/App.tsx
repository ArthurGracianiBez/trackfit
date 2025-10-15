import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { lazy, Suspense } from "react";
import { Loading } from "./components/loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error-fallback";
import { WorkoutsProvider } from "./context/workout-context";


const Home = lazy(() => import("./pages/home").then(module => ({default: module.Home})))
const AddWorkout = lazy(() => import("./pages/add-workout").then(module => ({default: module.AddWorkout})))
const WorkoutDetails = lazy(() => import("./pages/workout-details").then(module => ({default: module.WorkoutDetails})))
const TablePage = lazy(() => import("./pages/table-page").then(module => ({default: module.TablePage})))
const NotFound = lazy(() => import("./pages/not-found").then(module => ({default: module.NotFound})))

function App() {
  return (
    <WorkoutsProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
                  <Route path="/add" element={<AddWorkout/>}/>
                  <Route path="/tableWorkouts" element={<TablePage/>}/>
                  <Route path="/workout/:id" element={<WorkoutDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </WorkoutsProvider>
  );
}

export default App;
