import { loginUser } from "../../api/user.ts";
import style from "./Login.module.css";

export function Login() {
  //TODO Store JWT
  async function userLogin(formData: FormData) {
    const { username, password } = Object.fromEntries(formData.entries()) as {
      username: string;
      password: string;
    };
    const response = await loginUser(username, password);
    console.log(response);
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
