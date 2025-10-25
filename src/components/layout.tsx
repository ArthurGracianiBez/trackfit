import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function Layout(){
    const {logout} = useAuth();
    const navigate = useNavigate();
    return(
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow mb-6 flex justify-center itens-center w-full">
                <div className="flex justify-center items-center p-4 gap-5">
                    <Link className="link-home" to="/">Home</Link>
                    
                    <Link className="link-home" to="/add">Novo Treino</Link>
                </div>

                <div className="justify-self-end">
                <button className="button-blue" onClick={() => {
                    logout();
                    navigate("/login");
                }}>Sair</button>
                </div>
            </nav>
        <main className="flex flex-col justify-center items-center px-4 w-full">
            <Outlet />
        </main>
        </div>
    );
}