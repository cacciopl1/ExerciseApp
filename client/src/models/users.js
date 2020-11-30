/*

*/
import { myFetch } from "./my-fetch";

export function getUsers() {
    return myFetch('users');
}

export function login(email, password) {
    return myFetch('users/login', { Email: email, Password: password })
}