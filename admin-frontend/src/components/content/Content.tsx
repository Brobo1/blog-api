import { useAuth } from "../../contexts/AuthContext.tsx";
import { PostForm } from "../forms/PostForm.tsx";
import { Login } from "../login/Login.tsx";

export function Content() {
  const { isAuth } = useAuth();
  return <>{isAuth ? <PostForm /> : <Login />}</>;
}
