import {loginUser} from "../../api/user.ts";

export function Login() {
	
	async function userLogin(formData: FormData) {
		const {username, password} = Object.fromEntries(formData.entries()) as {
			username:string;
			password:string;
		}
		const response = await loginUser(username, password)
		console.log(response);
	}
	
	return (
		<>
			<form action={userLogin}>
				<input type="text" name="username"/>
				<input type="text" name="password"/>
				<button type={"submit"}>Login</button>
			</form>
		</>
	);
}