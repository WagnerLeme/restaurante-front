import { useState, type ReactNode } from "react";
import type { LoginData, LoginResponse } from "../types/auth.types";
import { loginRequest } from "../services/authService";
import { AuthContext } from "./authContextObject";

interface AuthProviderProps {
    children: ReactNode;
}

function getStoredUser(): LoginResponse["user"] | null {
    const storedUser = localStorage.getItem("user");

    if(!storedUser){
        return null;
    }

    return JSON.parse(storedUser);
}

function getStoredToken(): string | null {
    return localStorage.getItem("token");
}

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<LoginResponse["user"] | null>(getStoredUser);
    const [token, setToken] = useState<string | null>(getStoredToken);

    const isAuthenticated = !!user && !!token;

    async function signIn(data: LoginData): Promise<void> {
        const response = await loginRequest(data);

        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);

        setToken(response.token);
        setUser(response.user);
    }

    function signOut(): void {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}