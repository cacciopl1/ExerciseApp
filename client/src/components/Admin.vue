<template>
    <!-- <div class="card">
        <header class="card-header">
            <h1 class="card-header-title">
            {{accounts.user.name}}
            </h1>
        </header>
        <div class="card-content">
            <div class="content">
                <section class="hero is-primary is-bold">
                <div class="hero-body">
                    <div class="container">
                        <table>
                            <tr>
                                <th>
                                    <h4 class="title">
                                        Email: {{accounts.email}}
                                    </h4>
                                    <h4 class="subtitle">
                                        Handle: @{{accounts.user.handle}}
                                    </h4>
                                </th>
                                <th>
                                    <h4 class="subtitle">
                                        <figure class="image is-128x128">
                                            <img :src="accounts.user.profile">
                                        </figure>
                                    </h4>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item has-text-black">Save</a>
            <a class="card-footer-item has-text-black">Edit</a>
            <a class="card-footer-item has-text-black" @click.prevent="deleteAccount">Delete</a>
        </div>
        </footer> -->

        <div>
            <table class="table is-narrow is-hoverable is-fullwidth">
                <thead><tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Password</th>
                    <th>DOB</th>
                    <th>Type</th>
                </tr></thead>
                <tbody>
                    <tr v-for=" (x, i) in getUsers"
                            :key="i"
                            :i="i"
                            :post="x">
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Password</th>
                        <th>DOB</th>
                        <th>Type</th>
                    </tr>
                </tbody>
        </div>
</template>

<script>
import accounts from "@/models/accounts";
import { getUsers } from "@/models/users";

export default {
    props: {
        accounts: Object,
        i: Number
    },

    methods: {
        data() {
            return {
                users: []
            } 
        },
        async created() {
            this.users = await getUsers();
        },
        deleteAccount() {
            if (accounts.length > 1)
            {
                accounts.pop();
            }
            else
            {
                alert("Cannot delete the admin account...");
            }   
        }
    }
}
</script>

<style>

</style>