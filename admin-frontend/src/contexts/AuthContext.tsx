import { createContext, ReactNode, useState } from "react";
import { AuthContextType, User, UserToken } from "../types/types.ts";
import { loginUser } from "../api/user.ts";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState<boolean>(
    !!localStorage.getItem("token"),
  );
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function login(user: User) {
    setLoading(true);
    setError(null);
    try {
      const response: UserToken = await loginUser(user);
    } catch (err) {
      console.error("Failed to login", err);
    }
  }
}
