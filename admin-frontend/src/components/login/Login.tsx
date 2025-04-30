import style from "./Login.module.css";
import { User } from "../../types/types.ts";
import { useAuth } from "../../contexts/AuthContext.tsx";

export function Login() {
  const { login, isAuth, user, logout } = useAuth();
  async function userLogin(formData: FormData) {
    const user: User = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    await login(user);
  }

  return (
    <>
      {!isAuth ? (
        <form id={style.loginForm} action={userLogin}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type={"submit"}>Login</button>
        </form>
      ) : (
        <div>
          <h2>Welcome {user?.username}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </>
  );
}
