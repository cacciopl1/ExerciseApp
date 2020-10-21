<template>
<form>
    <h1><b>Welcome to the Login Page!</b></h1>
    <div class="login">
      <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" id="email">
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
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
          </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
          <button class="button is-success" @click.prevent="login">
          Login
          </button>
      </p>
    </div>
    <p>
      Current available accounts to login are: lcaccioppoli7@gmail.com, hcaccioppoli@gmail.com, dcaccioppoli1@gmail.com. Password doesn't matter.   
    </p>
</form>
</template>

<script>
import session from "@/models/session";
import accounts from "@/models/accounts";

export default {
    methods: {
      login() {
        var inputVal = document.getElementById("email").value;
        for (let i = 0; i < accounts.length; i++)
        {
          console.log(accounts[i].email);
        }
        
        for (let i = 0; i < accounts.length; i++)
        {
          if (inputVal == accounts[i].email)
          {
            session.user = {
                name: accounts[i].user.name,
                handle: accounts[i].user.handle,
                profile: accounts[i].user.profile
            }
            this.$router.push('tracked')
          }
        }
      }
    }
}
</script>