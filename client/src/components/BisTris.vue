<template>
    <nav class="panel is-info">
        <p class="panel-heading">
            Bicepts and Tricepts
        </p>
        <table class="table">
            <tbody>
                <tr>
                    <th>
                        <a class="panel-block">
                            <div class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                            </div>
                            Sets:
                            <input class="input" type="text" v-model="sets">
                        </a>
                    </th>
                    <th>
                        <a class="panel-block">
                            <div class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                            </div>
                            Reps:
                            <input class="input" type="text" v-model="reps_per_set">
                        </a>
                    </th>
                    <th>
                        <a class="panel-block">
                            <div class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                            </div>
                            Weight:
                            <input class="input" type="text" v-model="weight">
                        </a>
                    </th>
                </tr>
            </tbody> 
        </table>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                <b>Notes:</b>
                <input class="input" type="text" v-model="note">
            </a>


        <div class="panel-block">
            <button @click.prevent="postWorkout" class="button is-info is-outlined is-fullwidth">
                POST
            </button>
        </div>
    </nav>
</template>

<script>
import { bisTris } from "../models/mytracked";

export default {
    data: ()=>({
        note: '',
        sets: null,
        reps_per_set: null,
        weight: null
    }),
    props: {

    },
    methods: {
        async postWorkout() {
            const response = await bisTris(this.note, this.sets, this.reps, this.weight);
        }
    }
}
</script>

<style>

</style>