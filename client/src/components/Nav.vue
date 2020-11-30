<template>
  
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/home" class="navbar-item">
      <i class="fas fa-dumbbell"></i>
    </router-link>

    <a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" @click="isActive = !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
    <div class="navbar-start">
      <router-link to="/about"  class="navbar-item" >About</router-link>
      <router-link to="/tracked"  class="navbar-item" >Tracked</router-link>
      <router-link to="/post" class="navbar-item">Post-A-Workout</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <UserBadge />
      </div>
    </div>
  </div>
</nav>


</template>

<script>
import UserBadge from "@/components/UserBadge"

export default {
  data: ()=> ({
    isActive: false
  }),
  methods: {

  },
  components: {
    UserBadge
  }

}
</script>

<style>

</style>