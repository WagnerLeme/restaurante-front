import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { Unauthorized } from "../pages/Unauthorized";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<PublicRoutes />} />
                <Route path="/app/*" element={<PrivateRoutes />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
        </BrowserRouter>
    );
}