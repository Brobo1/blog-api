import { createContext, ReactNode, useContext, useState } from "react";
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
      localStorage.setItem("token", response.accessToken);
      setToken(response.accessToken);
      setIsAuth(true);
    } catch (err) {
      console.error("Failed to login", err);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuth(false);
    setUser(null);
  }

  const authContextValue: AuthContextType = {
    isAuth,
    user,
    token,
    login,
    logout,
    loading,
    error,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
