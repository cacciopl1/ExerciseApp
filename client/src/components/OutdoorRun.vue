<template>
    <nav class="panel is-link">
        <p class="panel-heading">
            Outdoor Run
        </p>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <b>Distance:</b>
            <input class="input" type="text" v-model="distance">
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <b>Notes:</b>
            <input class="input" type="text" v-model="note">
        </a>
        <div class="panel-block">
            <button @click.prevent="postWorkout" class="button is-primary is-outlined is-fullwidth">
                POST
            </button>
        </div>
    </nav>
</template>

<script>
import { outdoorRun } from "../models/mytracked";

export default {
    data: ()=>({
        note: '',
        distance: null,
    }),
    props: {

    },
    methods: {
        async postWorkout() {
            const response = await outdoorRun(this.note, this.distance);
        }
    }
}
</script>

<style>

</style>