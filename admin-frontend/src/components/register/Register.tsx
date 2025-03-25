import { createUser } from "../../api/user.ts";
import { User } from "../../types/types.ts";
import style from "./Register.module.css";

export function Register() {
  async function RegisterUser(formData: FormData) {
    const user: User = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const response = await createUser(user);

    console.log(response);
  }

  return (
    <>
      <form action={RegisterUser} id={style.registerForm}>
        <input type="text" name="username" id="usernameField" />
        <input type="password" name="password" id="passwordField" />
        <button type={"submit"}>Register</button>
      </form>
    </>
  );
}
