/*
    data for the user's tracked page.
    Currently mocked at the client side.
*/

import { myFetch } from "./my-fetch";
import session from "@/models/session";

export const getTracked = ()=> myFetch(`workouts/byUser/${session.user.id}`);

export function like(workout_id) {
    return myFetch('reactions', { Workout_id: workout_id, Owner_id: session.user.id })
}

export function comment(workout_id, text) {
    return myFetch('comments', { Workout_id: workout_id, Owner_id: session.user.id, Text: text })
}

export function outdoorRun(note, distance) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Outdoor Run', Note: note, Distance: distance})
}

export function indoorRun(note, distance) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Indoor Run', Note: note, Distance: distance})
}

export function bisTris(note, sets, reps, weight) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: `Bi's and Tri's`, Note: note, Sets: sets, Reps_Per_Set: reps, Weight: weight})
}

export function shoulders(note, sets, reps, weight) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Shoulders', Note: note, Sets: sets, Reps_Per_Set: reps, Weight: weight})
}

export function chest(note, sets, reps, weight) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Chest', Note: note, Sets: sets, Reps_Per_Set: reps, Weight: weight})
}

export function back(note, sets, reps, weight) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Back', Note: note, Sets: sets, Reps_Per_Set: reps, Weight: weight})
}

export function legs(note, sets, reps, weight) {
    return myFetch('workouts', { Owner_id: session.user.id, Privacy_Setting: 4, Start_Time: 'NOW()', End_Time: 'NOW()', Exercise_Type: 'Leg Day', Note: note, Sets: sets, Reps_Per_Set: reps, Weight: weight})
}