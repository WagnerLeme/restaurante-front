export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    name: string;
    email: string;
    role: "admin" | "user";
  };
}

