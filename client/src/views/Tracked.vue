<template>
  <div class="tracked">
    <h2 class="title is-4"> <br><b>These are your tracked workouts:</b></h2>

    <div class="columns">
      <div class="column is-two-thirds">
        <Completed />
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

export default {
  components: {
    Friends, Completed
  }
}
</script>