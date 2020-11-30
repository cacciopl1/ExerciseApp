<template>
    <nav class="panel is-black">
        <p class="panel-heading">
            Users
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Search">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <p class="panel-tabs">
            <a @click.prevent="clickAll">All</a>
            <a @click.prevent="clickFollowing">Friends</a>
        </p>
        <div v-if="this.all">
            <a class="panel-block is-active" v-for="(x, i) in allUsers "
                :key="i"
                :i="i"
                :post="x">
                <div>
                    <b>{{x.FirstName}} {{x.LastName}}</b>
                    <a @click.prevent="follow(x.id)" class="button is-primary">
                        Follow
                    </a>
                </div>
            </a>
        </div>
        <div v-else-if="this.following">
            <a class="panel-block is-active" v-for="(x, i) in followingUsers "
                :key="i"
                :i="i"
                :post="x">
                <p><b>{{x.Firstname}} {{x.LastName}}</b></p>
            </a>
        </div>

    </nav>
</template>

<script>

import { getUsers, getFollowers, followUser } from "../models/users";
import session from "@/models/session";

export default {
    data: ()=>({
        allUsers: [],
        followingUsers: [],
        all: true,
        following: false,
        session
    }),
    async created() {
        this.allUsers = await getUsers();
        this.followingUsers = await getFollowers();
    },
    methods: {
        clickAll() {
            this.all = true;
            this.following = false;
        },
        clickFollowing() {
            this.all = false;
            this.following = true;
        },
        async follow(id) {
            const response = await followUser(id, session.user.id);
            alert("Follow successful! They now have to follow you back on their profile in order for you to see them on your friends list.");
        }
    }
}
</script>

<style>

</style>