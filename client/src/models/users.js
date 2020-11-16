/*

*/
import { myFetch } from "./my-fetch";

export function getUsers() {
    return myFetch('http://localhost:3001/users')
}