import { PostForm } from "../forms/PostForm.tsx";
import { Login } from "../login/Login.tsx";

export function Content() {
  return (
    <>
      {
        <div>
          <PostForm />
          <Login />
        </div>
      }
    </>
  );
}
