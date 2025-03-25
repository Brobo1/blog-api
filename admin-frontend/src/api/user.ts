import {
  createUserEndpoint,
  getUserEndpoint,
  loginEndpoint,
} from "../util/urls.ts";
import { User } from "../types/types.ts";

export async function createUser(user: User) {
  try {
    return await fetch(createUserEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (err) {
    console.error("Unable to register user", err);
  }
}

export async function getUser(username: string, password: string) {
  await fetch(getUserEndpoint, {
    method: "POST",

    body: JSON.stringify({ username, password }),
  });
}

export async function loginUser(username: string, password: string) {
  try {
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.error("Unable to login", err);
  }
}
