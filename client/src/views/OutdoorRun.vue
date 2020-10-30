<template>
    <div class="tile is-ancestor">
        <div class="tile is-6 is-parent is-vertical">
            <div class="tile is-child box">
                <p class="title">GPS</p>
                <figure class="image is-4by3">
                    <img src="https://previews.123rf.com/images/kume111000/kume1110001802/kume111000180200045/95094687-gps-navigation-background-city-map-vector-illustration-.jpg">
                </figure>
            </div>
            <div class="tile is-child box is-vertical">
                <p class="title">SPLITS</p>
                <p></p>
            </div>
        </div>
        <div class="tile is-vertical is-parent">
            <div class="tile is-child box">
                <p class="title">BEGIN WORKOUT</p>
                <Timer />
            </div>
            <div class="tile is-child box">
                <p class="title">MISC</p>
                <PostWorkout />
            </div>
        </div>
    </div>
</template>

<script>
import Timer from "@/components/Timer";
import PostWorkout from "@/components/PostWorkout";

export default {
    components: {
        Timer, PostWorkout
    }
}
</script>

<style>

</style>