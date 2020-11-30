/*
    data for the user's tracked page.
    Currently mocked at the client side.
*/

import { myFetch } from "./my-fetch";
import { session } from "./session";

export const getTracked = ()=> myFetch('workouts/byUser/1');

export function like(workout_id) {
    return myFetch('reactions', { Workout_id: workout_id, Owner_id: 1 })
}

export function comment(workout_id, text) {
    return myFetch('comments', { Workout_id: workout_id, Owner_id: 1, Text: text })
}

export function outdoorRun(note, distance) {
    return myFetch('workouts', { Owner_id: 1, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Outdoor Run', Note: note, Distance: distance})
}

export function indoorRun(note, distance) {
    return myFetch('workouts', { Owner_id: 1, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Indoor Run', Note: note, Distance: distance})
}