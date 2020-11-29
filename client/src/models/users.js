/*

*/
import { myFetch } from "./my-fetch";

export function getUsers() {
    return myFetch('users');
}