import { useState } from "react"
import type { Workout } from "../types/workout"
import type { Intencity } from "../types/intencity"

interface WorkoutFormProps {
    onAdd: (workout: Workout) => void;
}



export function WorkoutForm({onAdd}: WorkoutFormProps){
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(0)
    const [intencity, setIntencity] = useState<Intencity>(1)
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')
    
    function handleSubmit(event: React.FormEvent):void {
        event.preventDefault();

        const workout: Workout ={
            id: crypto.randomUUID(),
            title:title,
            date:date,
            durationMinutes:duration,
            intensity:intencity,
            notes:notes

        }
        onAdd(workout);

        setTitle:("");
        setDuration:(0);
        setIntencity:(1);
        setDate:{""};


    }

    return(
        <form 
            onSubmit={handleSubmit}
            action="" className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5
            mb-5">
            <label htmlFor="">Título do treino</label>
            <input type="text" id="workout-title" placeholder="Título do treino" 
            onChange={(e) => setTitle(e.target.value)} value={title}
            className="input"/>

            <label htmlFor="">Duração (min)</label>
            <input type="number" id="workout-duration" placeholder="Duração" 
            onChange={(e) => setDuration(Number(e.target.value))} value={duration}
            className="input"/>

            <label htmlFor="workout-intenciti">Intencidade</label>
            <input type="number" id="workout-intenciti" placeholder="Intencidade"
            onChange={(e) => setIntencity(Number(e.target.value) as Intencity)}
            value={intencity} max={5} min={1}
            className="input"/>

            <label htmlFor="workout-date">Dia do Treino</label>
            <input type="date" id="workout-date" placeholder="Data"
            onChange={(e) => setDate(e.target.value)} value={date}
            className="input"/>

            <label htmlFor="">Notas</label>
            <input type="text" id="workout-notes" placeholder="Notas"
             onChange={(e) => setNotes(e.target.value)} value={notes}
             className="input"/>

            <button className="button-blue" type="submit">Adicionar</button>
        </form>
    )
}