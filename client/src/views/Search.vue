<template>
  <div class="search">
    <h1><b>Welcome to the search page!</b></h1>
    <h1>This is how far I got with the search feature. It took me the better of the two hours to try and get data to read the json array but finally figured it out around 2:00pm. My next step was going to have the users be able to pull up tracked data but I ran out of time unfortunately. Although, I think the important part is that I got the search function to read from the database</h1>
    <br>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Search for posted workouts, other users, etc.">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
  </div>


</template>



<script>

import { getUsers, getFollowers } from "../models/users";
import { getTracked, getFollowerPosts } from "@/models/mytracked";

    export default {
        data() {
            return {
                data: [],
                userData: [],
                trackedData: [],
                name: '',
                selected: null
            }
        },
        async created() {
          this.userData = await getUsers();
          this.data = this.userData.map((x)=> x.FirstName + " " + x.LastName + " => DOB: " + x.DOB + " User Type: " + x.User_Type);


        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
    }
</script>

