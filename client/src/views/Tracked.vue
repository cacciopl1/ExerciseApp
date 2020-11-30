<template>
  <div class="tracked">
    <h2 class="title is-4"> <br><b>These are your tracked workouts:</b></h2>

    <div class="columns">
      <div class="column is-two-thirds">
        <Completed v-for=" (x, i) in workouts " 
            :key="i"
            :i="i" 
            :workouts="x" />
      </div>

      <div class="column is-one-third">
          <Friends />
      </div>
    </div>


    

  </div>
</template>

<script>
import Friends from "@/components/Friends";
import Completed from "@/components/Completed";
import session from "@/models/session";
import { getTracked } from "@/models/mytracked";

export default {
  data() {
    return {
        workouts: []
    }
  },
  async created() {
    this.workouts = await getTracked();
  },
  components: {
    Friends, Completed
  }
}
</script>