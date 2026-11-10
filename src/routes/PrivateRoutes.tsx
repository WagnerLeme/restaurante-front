import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";

import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { CategoriesPage } from "../pages/categories/CategoriesPage";
import { FilesPage } from "../pages/files/FilesPage";

export function PrivateRoutes() {
    return (
        <Routes>
            <Route 
                path="/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["admin", "user"]}>
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/categories"
                element={
                    <ProtectedRoute allowedRoles={["admin", "user"]}>
                        <CategoriesPage />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/files"
                element={
                    <ProtectedRoute allowedRoles={["admin", "user"]}>
                        <FilesPage />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
        </Routes>
    )
}