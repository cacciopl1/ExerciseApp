<template>
  
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/home" class="navbar-item">
      <img src="../assets/dumbell.jpg" height="28">
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

      <div class="navbar-item has-dropdown is-hoverable">
        <router-link to="" class="navbar-link navbar-item">Exercises</router-link>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Outdoor Run
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Treadmill Run
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Strength Training
          </a>
        </div>
      </div>
      
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