<template>
<form>
  <h1><b>Welcome to the Signup page!</b></h1>
  <h1>Please fill in all the fields and hit signup!</h1>
    <div class="signup">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="First Name" v-model="firstName">
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
          </span>
      </p>
    </div>
    <div class="signup">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Last Name" v-model="lastName">
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
          </span>
      </p>
    </div>
    <div class="signup">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="DOB (month day, year)" v-model="dob">
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
          </span>
      </p>
    </div>
    <div class="login">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="email">
          <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
          </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="password">
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
          <button class="button is-warning" @click.prevent="register">
          Signup!
          </button>
      </p>
    </div>

</form>

</template>

<script>

import { register } from "../models/users";

export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        const response = await register(this.firstName, this.lastName, this.dob, this.password, this.email);
        alert("success!");
      }
    }
    
  
}
</script>