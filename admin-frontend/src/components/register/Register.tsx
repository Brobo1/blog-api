import { createUser } from "../../api/user.ts";
import { User } from "../../types/types.ts";

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
      <form action={RegisterUser}>
        <input type="text" name="username" id="usernameField" />
        <input type="text" name="password" id="passwordField" />
        <button type={"submit"}>Register</button>
      </form>
    </>
  );
}
