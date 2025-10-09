import { WorkoutForm } from "../components/workout-form";


export function AddWorkout() {
  {/*}
  const workoutMinutes = useMemo(() => {
    let workoutMinutesRealized: number = 0;

    workouts.forEach((value) => {
      workoutMinutesRealized += value.durationMinutes;
    });

    const hours = Math.floor(workoutMinutesRealized / 60);
    const minutes = workoutMinutesRealized % 60;

    return `${hours}:${minutes}`;
  }, [workouts]);
  */}
  return (
    <>
   
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar novo treino
      </h2>

      {/*<h3>Tempo de treino: {workoutMinutes}</h3>*/}

      <WorkoutForm />
   
    </>
  );
}