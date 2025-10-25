import { createContext, useContext, useState } from "react";
import type { AuthUser } from "../types/auth-user";
import Cookies from "js-cookie";

interface AuthContextProps {
    user: AuthUser | null;
    login: (username: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

const API = import.meta.env.VITE_API_URL;   

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    
    async function login(username: string) {
        const response = await fetch(`${API}/users?name=${username}`);
        
        const [data]: AuthUser[] = await response.json();
        
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        Cookies.set("user", JSON.stringify(data),{
            expires: 10,
        });
}

function logout() {
    setUser(null);
    localStorage.removeItem("user");
    Cookies.remove("user");
}

return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
)
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if(!ctx) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider")
    }
    return ctx;
}