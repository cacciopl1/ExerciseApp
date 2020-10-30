<template>
    <nav class="panel is-link">
        <p class="panel-heading">
            Post_A_Workout (WIP/Temporary)
        </p>
        <h6><b>For Run:</b></h6>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Distance:
            <input class="input" type="text" id="distance">
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Time:
            <input class="input" type="text" id="time">
        </a>
        <h6><b>For Strength Training:</b></h6>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Exercises:
            <input class="input" type="text" id="exercises">
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Reps:
            <input class="input" type="text" id="reps">
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Sets:
            <input class="input" type="text" id="sets">
        </a>
        <p class="panel-tabs">
            <button @click="outdoor">Outdoor Run</button>
            <button @click="treadmill">Treadmill Run</button>
            <button @click="strength">Strength Training</button>
        </p>
        <div class="panel-block">
            <button @click="remove" class="button is-danger is-outlined is-fullwidth">
            Delete Post
            </button>
        </div>
    </nav>
</template>

<script>
import { tracked } from "@/models/mytracked";
import session from "@/models/session";

var distance = '';
var time = '';
var exercises = '';
var reps = '';
var sets = '';

export default {
    methods: {
        outdoor() {
            distance = document.getElementById("distance").value;
            time = document.getElementById("time").value;

            if (distance == '')
            {
                distance = 'Not Specified';
            }

            if (time == '')
            {
                time = 'Not Specified';
            }
            
            var workout = {
                image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88d47307-bef1-4f84-9585-7563e6851c7b/dce0am2-0ec1c692-57ad-4ea8-824f-201f2abed3a7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODhkNDczMDctYmVmMS00Zjg0LTk1ODUtNzU2M2U2ODUxYzdiXC9kY2UwYW0yLTBlYzFjNjkyLTU3YWQtNGVhOC04MjRmLTIwMWYyYWJlZDNhNy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.PVagVmizgW5xrMrpFsD7cRWJBBO6gStLy_e9l8GmvY0',
                message: 'Outdoor Run Complete! Distance: ' + distance + ' || Time: ' + time,
                user: {
                    name: session.user.name,
                    handle: session.user.handle,
                    profile: session.user.profile
                }
            }
            tracked.push(workout);
        },
        treadmill() {
            distance = document.getElementById("distance").value;
            time = document.getElementById("time").value;

            if (distance == '')
            {
                distance = 'Not Specified';
            }

            if (time == '')
            {
                time = 'Not Specified';
            }

            var workout = {
                image: 'https://media0.giphy.com/media/xTiTnDLA3J0fokYwi4/giphy-downsized.gif',
                message: 'Treadmill Run Complete! Distance: ' + distance + ' || Time: ' + time,
                user: {
                    name: session.user.name,
                    handle: session.user.handle,
                    profile: session.user.profile
                }
            }
            tracked.push(workout);
        },
        strength() {
            exercises = document.getElementById("exercises").value;
            reps = document.getElementById("reps").value;
            sets = document.getElementById("reps").value;

            if (exercises == '')
            {
                exercises = 'Not Specified';
            }

            if (reps == '')
            {
                reps = 'Not Specified';
            }

            if (sets == '')
            {
                sets = 'Not Specified';
            }

            var workout = {
                image: 'https://media3.giphy.com/media/QvXVzMT3oziRDud6df/source.gif',
                message: 'Strength Training! Exercises: ' + exercises + ' || Reps: ' + reps + ' || Sets: ' + sets,
                user: {
                    name: session.user.name,
                    handle: session.user.handle,
                    profile: session.user.profile
                }
            }
            tracked.push(workout);
        },
        remove() {
            if (accounts.length() > 1)
            {
                tracked.pop();
            }
            else
            {
                
            }
        }
    }
}
</script>

<style>

</style>