<template>
  <div class="tracked">
    <h2 class="title is-4"> <br><b>These are your tracked workouts:</b></h2>

    <div class="columns">
      <div class="column is-two-thirds">
        <Completed v-for=" (x, i) in workouts " 
            :key="i"
            :i="i" 
            :workouts="x" />

            <Completed v-for=" (x, i) in friendsWorkouts " 
            :key="i"
            :i="i" 
            :friendsWorkouts="x" />
      </div>

      <div class="column is-one-third">
          <Friends />
          <a @click.prevent="test" class="button is-primary">
            Submit
          </a>
      </div>
    </div>


    

  </div>
</template>

<script>
import Friends from "@/components/Friends";
import Completed from "@/components/Completed";
import session from "@/models/session";
import followers from "@/models/followers";
import { getTracked, getFollowerPosts } from "@/models/mytracked";
import { getFollowers } from "@/models/users";




export default {
  data() {
    return {
        workouts: [],
        friendsWorkouts: []
    }
  },
  async created() {
    this.workouts = await getTracked();
    this.friendsWorkouts = await getFollowerPosts();
    
  },
  components: {
    Friends, Completed
  },
  methods: {
    test() {
      console.log(this.workouts);
      console.log(this.friendsWorkouts);
    }
  }
}
</script>