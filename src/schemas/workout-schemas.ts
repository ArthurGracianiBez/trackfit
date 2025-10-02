import {z} from 'zod'

export const workoutSchema = z.object({
    title: z.string().min(3, "O titulo deve ter no mínimo 3 caracteres"),
    durationMinutes: z.number().min(10, "A duração deve ser pelo menos 10 minutos."),
    intensity: z.number().min(1, "Intecidade deve ser maior ou igual a 1").max(5,
        "Intecidade deve ser menor ou igual a 5"),
    date: z.string().nonempty("A data é obrigatória"),
    notes: z.string().optional(),
});

export type WorkoutSchema = z.infer<typeof workoutSchema>;  