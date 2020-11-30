<template>
    <nav class="panel is-success">
        <p class="panel-heading">
            Indoor Run
        </p>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Distance:
            <input class="input" type="text" v-model="distance">
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Notes:
            <input class="input" type="text" v-model="note">
        </a>
        <div class="panel-block">
            <button @click.prevent="postWorkout" class="button is-success is-outlined is-fullwidth">
                POST
            </button>
        </div>
    </nav>
</template>

<script>
import { indoorRun } from "../models/mytracked";

export default {
    data: ()=>({
        note: '',
        distance: null,
    }),
    props: {

    },
    methods: {
        async postWorkout() {
            const response = await indoorRun(this.note, this.distance);
        }
    }
}
</script>

<style>

</style>