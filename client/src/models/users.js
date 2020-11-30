/*

*/
import { myFetch } from "./my-fetch";
import session from "@/models/session";

export function getUsers() {
    return myFetch('users');
}

export const getFollowers = ()=> myFetch(`followers/${session.user.id}`);

export function followUser(following_id, follower_id) {
    return myFetch('followers/', {Following_id: following_id, Follower_id: follower_id, isAccepted: 1 })
}

export function login(email, password) {
    return myFetch('users/login', { Email: email, Password: password })
}

export function register(firstName, lastName, DOB, password, email) {
    return myFetch('users/register', { FirstName: firstName, LastName: lastName, DOB: DOB, Password: password, Email: email })
}