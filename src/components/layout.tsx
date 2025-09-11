import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <div className=" min-h-screen bg-gray-100">
            <nav className="bg-white shadow mb-6">
                <div className="flex justify-center items-center p-4 gap-5">
                    <Link className="link-home" to="/">Home</Link>
                    
                    <Link className="link-home" to="/add">Novo Treino</Link>
                </div>
            </nav>
        <main className="flex flex-col justify-center items-center px-4 w-full">
            <Outlet />
        </main>
        </div>
    );
}