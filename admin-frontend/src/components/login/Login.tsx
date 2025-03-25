import { loginUser } from "../../api/user.ts";
import style from "./Login.module.css";
import { User } from "../../types/types.ts";

export function Login() {
  //TODO Store JWT
  async function userLogin(formData: FormData) {
    const user: User = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    const response = await loginUser(user);
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
