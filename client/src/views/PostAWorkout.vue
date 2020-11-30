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
                <p class="title">STRENGTH TRAIN</p>
                <BisTris />
                <Chest />
                <Back />
            </div>
        </div>
        <div class="tile is-vertical is-parent">
            <div class="tile is-child box">
                <p class="title">TIMER</p>
                <Timer />
            </div>
            <div class="tile is-child box">
                <p class="title">CARDIO</p>
                <OutdoorRun />
                <IndoorRun />
            </div>
            <div class="tile is-child box is-vertical">
                <p class="title">STRENGTH TRAIN</p>
                <Shoulders />
                <Legs />
            </div>
        </div>
    </div>
</template>

<script>
import session from "@/models/session";
import Timer from "@/components/Timer";
import OutdoorRun from "@/components/OutdoorRun";
import IndoorRun from "@/components/IndoorRun";
import BisTris from "@/components/BisTris";
import Shoulders from "@/components/Shoulders";
import Chest from "@/components/Chest";
import Back from "@/components/Back";
import Legs from "@/components/Legs";

export default {
    components: {
        Timer, OutdoorRun, IndoorRun, BisTris, Shoulders, Chest, Back, Legs
    }
}
</script>

<style>

</style>