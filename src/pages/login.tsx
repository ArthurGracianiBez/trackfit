import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/login-schema";
import { useWorkouts } from "../context/workout-context";

export function Login(){
    const { login } = useAuth();
    const { fetchWorkouts } = useWorkouts();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<LoginSchema>({
            resolver: zodResolver(loginSchema),
        });

        async function onSubmit({username}: LoginSchema){
            await login(username);
            navigate("/");
            await fetchWorkouts();
        }
 

    return(
        <>
        <div className="max-w-sm mx-auto p-4 bg-white shadow rounded mt-50">

            <h2 className="text-xl font-bold mb-4">Login</h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Digite seu nome</label>
                <input className="border rounded p-2" type="text" placeholder="Nome" 
                id="username" {...register("username")}/>
                {errors.username && (
                    <p className="text-red-500">{errors.username.message}</p>
                )}
                <button type="submit" className="button-blue">Entrar</button>   
            </form>

        </div>
        </>
    )
}