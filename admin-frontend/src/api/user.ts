import {createUserEndpoint, getUserEndpoint} from "../util/urls.ts";

export async function createUser() {
	await fetch(createUserEndpoint)
}

export async function getUser(username: string, password:string) {
	await fetch(getUserEndpoint, {
		method: "POST",
		body: JSON.stringify({username, password})
	})
}