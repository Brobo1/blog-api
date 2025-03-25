export interface User {
  username: string;
  password: string;
}

export interface UserToken {
  message: string;
  accessToken: string;
}

export interface AuthContextType {
  isAuth: boolean;
  user: User | null;
  token: string | null;
  login: (user: User) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}
