import { loginUser } from "../../api/user.ts";
import style from "./Login.module.css";
import { User, UserToken } from "../../types/types.ts";

export function Login() {
  async function userLogin(formData: FormData) {
    try {
      const user: User = {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      };
      const response: UserToken = await loginUser(user);
      localStorage.setItem("token", response.accessToken);
    } catch (err) {
      console.error("Failed to login", err);
    }
  }

  return (
    <>
      <form id={style.loginForm} action={userLogin}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type={"submit"}>Login</button>
      </form>
    </>
  );
}
