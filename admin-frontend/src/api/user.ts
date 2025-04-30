import {
  createUserEndpoint,
  getUserEndpoint,
  loginEndpoint,
} from "../util/urls.ts";
import { User } from "../types/types.ts";

export async function createUser(user: User) {
  try {
    const response = await fetch(createUserEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
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

export async function loginUser(user: User) {
  try {
    const response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 400) {
      throw new Error("Invalid username or password");
    }

    return response.json();
  } catch (err) {
    console.error("Unable to login", err);
  }
}
