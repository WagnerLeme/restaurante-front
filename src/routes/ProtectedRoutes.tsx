import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type UserRole = "admin" | "user";

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles: UserRole[];
}

const authMock = {
    isAuthenticated: true,
    user: {
        name: "Usuário Teste",
        role: "admin" as UserRole,
    },
};

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    
    if(!authMock.isAuthenticated){
        return <Navigate to="/login" replace/>;
    }

    if(!allowedRoles.includes(authMock.user.role)){
        return <Navigate to="/unauthorized" replace/>;
    }


    return children;
}