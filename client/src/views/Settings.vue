<template>

    <div>
        <div v-if="session.user">
            <section class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Account info
                        </h1>
                        <h2 class="subtitle"> 
                            
                            <div class="tile is-ancestor">
                                <div class="tile is-vertical is-8">
                                    <div class="tile">
                                    <div class="tile is-parent is-vertical">
                                        <article class="tile is-child notification is-primary">
                                            <p class="title">NAME</p>
                                            <p class="subtitle">{{session.user.firstName}} {{session.user.lastName}}</p>
                                        </article>
                                        <article class="tile is-child notification is-warning">
                                            <p class="title">EMAIL</p>
                                            <p class="subtitle">{{session.user.email}}</p>
                                        </article>
                                    </div>
                                    <div class="tile is-parent">
                                        <article class="tile is-child notification is-info">
                                        <p class="title">PROFILE</p>
                                        <figure class="image is-4by3">
                                            <img :src="`http://localhost:3001/public/profiles/${session.user.id}.jpg`">
                                        </figure>
                                        </article>
                                    </div>
                                    </div>
                                    <div class="tile is-parent">
                                    <article class="tile is-child notification is-danger">
                                        <p class="title">ABOUT</p>
                                        <p class="subtitle">This tile is about you <br> coming soon...</p>
                                        <div class="content">
                                        <!-- Content -->
                                        </div>
                                    </article>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child notification is-success">
                                    <div class="content">
                                        <p class="title">GOALS</p>
                                        <p class="subtitle">Set and track your goals <br> coming soon...</p>
                                        <div class="content">
                                        <!-- Content -->
                                        </div>
                                    </div>
                                    </article>
                                </div>
                            </div>

                        </h2>
                    </div>
                </div>
            </section>
        </div>

        <div v-if="session.user.handle == 'lcaccio'">
            <section class="hero is-dark is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Admin
                        </h1>
                        <h2 class="subtitle">
                            All of the accounts on the DataBase:
                            <table class="table">
                                <thead><tr>
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Password</th>
                                    <th>DOB</th>
                                    <th>Type</th>
                                </tr></thead>
                                <tbody><tr v-for="(x, i) in users "
                                        :key="i"
                                        :i="i"
                                        :post="x">
                                    <th>{{x.id}}</th>
                                    <th>{{x.FirstName}}</th>
                                    <th>{{x.LastName}}</th>
                                    <th>{{x.Password}}</th>
                                    <th>{{x.DOB}}</th>
                                    <th>{{x.Type}}</th>
                                </tr></tbody>
                            </table>
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>

    

</template>

<script>
import session from "@/models/session";
import accounts from "@/models/accounts";
import { getUsers } from "@/models/users";

export default {
    data() {
        return {
            accounts,
            session,
            users: []
        }
    },
    async created() {
        this.users = await getUsers();
    },
    methods: {

    }
}
</script>

<style>

</style>