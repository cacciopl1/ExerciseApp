/*
    data for the user's tracked page.
    Currently mocked at the client side.
*/

import { myFetch } from "./my-fetch";

export const getTracked = ()=> myFetch('workouts');