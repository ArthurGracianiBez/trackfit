import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/login-schema";

export function Login(){
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<LoginSchema>({
            resolver: zodResolver(loginSchema),
        });

        function onSubmit({username}: LoginSchema){
            login(username);
            navigate("/");
        }
 

    return(
        <>
        <div className="max-w-sm mx-auto p-4 bg-white shadow rounded">
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