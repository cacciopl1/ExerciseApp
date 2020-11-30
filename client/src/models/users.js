/*

*/
import { myFetch } from "./my-fetch";

export function getUsers() {
    return myFetch('users');
}

export function login(email, password) {
    return myFetch('users/login', { Email: email, Password: password })
}

export function register(firstName, lastName, DOB, password, email) {
    return myFetch('users/register', { FirstName: firstName, LastName: lastName, DOB: DOB, Password: password, Email: email })
}