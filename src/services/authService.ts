import type { LoginData, LoginResponse } from "../types/auth.types";
import { api } from "./api";

export async function loginRequest(data: LoginData): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth', data);
    return response.data;
}