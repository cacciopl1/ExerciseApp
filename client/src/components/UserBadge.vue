<template>
    <div id="UserBadge">

        <div class="media" v-if="session.user">
            <div class="media-left">
                <figure class="image">
                <img :src="session.user.profile">
                </figure>
            </div>
            <div class="media-left">
                <p class="is-italic has-text-weight-bold">@{{session.user.handle}}</p>
            </div>
            <div class="media-left">
                <router-link to="/settings">
                    <i class="fas fa-user-cog"></i>
                </router-link>
            </div>
        </div>

        <div class="buttons" v-else>
            <router-link to="/signup" class="button is-danger"><strong>Sign up</strong></router-link>
            <router-link to="/login" class="button is-light">Log in</router-link>
        </div>
    </div>
</template>

<script>
import session from "@/models/session";

export default {
    data: ()=> ({
        session
    })
}
</script>

<style>
    .media .image img {
        width: auto;
    }
</style>