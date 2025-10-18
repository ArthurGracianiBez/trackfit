import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { lazy, Suspense, type JSX } from "react";
import { Loading } from "./components/loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error-fallback";
import { WorkoutsProvider } from "./context/workout-context";
import { Login } from "./pages/login";
import { AuthProvider, useAuth } from "./context/auth-context";

const Home = lazy(() => import("./pages/home").then(module => ({default: module.Home})))
const AddWorkout = lazy(() => import("./pages/add-workout").then(module => ({default: module.AddWorkout})))
const WorkoutDetails = lazy(() => import("./pages/workout-details").then(module => ({default: module.WorkoutDetails})))
const NotFound = lazy(() => import("./pages/not-found").then(module => ({default: module.NotFound})))

function PrivateRoute({children}: {children: JSX.Element}) {
  const {user} = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <WorkoutsProvider>
      <AuthProvider>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
              <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<PrivateRoute><Home /></PrivateRoute>}/>
                    <Route path="/add" element={<PrivateRoute><AddWorkout/></PrivateRoute>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/workout/:id" element={<WorkoutDetails />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </AuthProvider>
    </WorkoutsProvider>
  );
}

export default App;
