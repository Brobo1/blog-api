import { useAuth } from "../../contexts/AuthContext.tsx";
import { PostForm } from "../forms/PostForm.tsx";
import { Login } from "../login/Login.tsx";

export function Content() {
  const { isAuth, logout, user } = useAuth();
  return (
    <>
      {isAuth ? (
        <div>
          <h2>Welcome {user?.username}</h2>
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
