
import { zodResolver } from "@hookform/resolvers/zod";
import type { Workout } from "../types/workout"

import { useForm, useFormState } from "react-hook-form";
import { workoutSchema, type WorkoutSchema } from "../schemas/workout-schemas";
import type { Intencity } from "../types/intencity";


export function WorkoutForm(){
    const { register, handleSubmit, formState: {errors}, reset } = useForm<WorkoutSchema>({
        resolver: zodResolver(workoutSchema),
    })

    
    function onSubmit({
        title, 
        date, 
        durationMinutes, 
        intensity, 
        notes}: WorkoutSchema):void {
        const workout: Workout ={
            id: crypto.randomUUID(),
            title,
            date,
            durationMinutes,
            intensity: intensity as Intencity,
            notes,
        };

        fetch('http://localhost:4000/workouts',{
            method: "POST",
            body: JSON.stringify(workout),
        });
        
        reset();
    }



    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
            action="" className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5
            mb-5">
            <label htmlFor="">Título do treino</label>
            <input type="text" id="workout-title" placeholder="Título do treino" 
            {...register("title")}
            className="input"/>
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
               
            <label htmlFor="">Duração (min)</label>
            <input type="number" id="workout-duration" placeholder="Duração" 
           {...register("durationMinutes", {valueAsNumber: true})}
            className="input"/>
            {errors.durationMinutes && <p className="text-red-500">{errors.durationMinutes.message}</p>}

            <label htmlFor="">Data</label>
            <input type="date" id="workout-duration" placeholder="Duração" 
           {...register("date")}
            className="input"/>
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}

            <label htmlFor="">Intencidade</label>
            <input type="number" id="workout-duration" placeholder="Intencidade" 
           {...register("intensity", {valueAsNumber: true})}
            className="input"/>
            {errors.intensity && <p className="text-red-500">{errors.intensity.message}</p>}

            <label htmlFor="">Anotações</label>
            <input type="text" id="workout-duration" placeholder="Anotações" 
           {...register("notes")}
            className="input"/>
            {errors.notes && <p className="text-red-500">{errors.notes.message}</p>}
           
            <button className="button-blue" type="submit">Adicionar</button>
        </form>
    )
}