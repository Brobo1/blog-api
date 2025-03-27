import { useAuth } from "../../contexts/AuthContext.tsx";
import { PostForm } from "../forms/PostForm.tsx";
import { Login } from "../login/Login.tsx";

export function Content() {
  const { isAuth, logout } = useAuth();
  return (
    <>
      {isAuth ? (
        <div>
          <PostForm />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
}
