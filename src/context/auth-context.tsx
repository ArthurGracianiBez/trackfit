import { createContext, useContext, useState } from "react";

interface AuthContextProps {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<string | null>(null);
    
    function login(username: string) {
    setUser(username);
    localStorage.setItem("user", username);
    }
    
    function logout() {
        localStorage.removerItem("user");
    }

    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    if(!ctx) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider")
    }
    return ctx;
}