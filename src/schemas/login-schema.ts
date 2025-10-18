import {z} from "zod";

export const loginSchema = z.object({
    username: z.string().nonempty("O nome é obrigatório")
});

export type LoginSchema = z.infer<typeof loginSchema>;