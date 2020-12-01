<template>
<form>
    <h1><b>Welcome to the Login Page!</b></h1>
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
          <input class="input" type="password" v-model="password">
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
    <div class="field">
      <p class="control">
          <button class="button is-success" @click.prevent="googleLogin">
          Google
          </button>
      </p>
    </div>
</form>
</template>

<script>
import session from "@/models/session";
import followers from "@/models/followers";
import accounts from "@/models/accounts";
import { getUsers, login, getFollowers } from "../models/users";
let auth2 = null;

export default {
    data() {
      return {
        users: [],
        followersData: [],
        email: '',
        password: ''
      }
    },
    async created() {
      this.users = await getUsers();
    },
    methods: {
      async login() {
        const response = await login(this.email, this.password);

        session.user = {
          id: response.id,
          firstName: response.FirstName,
          lastName: response.LastName,
          email: response.PrimaryEmail,
          dob: response.DOB,
          created: response.created_at,
          type: response.User_Type
        }

        this.followersData = await getFollowers();
        for (let i = 0; i < this.followersData.length; i++)
        {
          followers.user = {
            Fid: this.followersData[i]
          }
        }
        //console.log(followers);

        this.$router.push('tracked')
      },
      async googleLogin() {
        const googleUser = await auth2.signIn()
        console.log(googleUser);
        const profile = googleUser.getBasicProfile();
        console.log(profile);
        session.user = {
            name: profile.getName(),
            handle: profile.getEmail(),
            profile: profile.getImageUrl(),
        }
        this.$router.push('tracked')
      }
    }
}

//////////////////////////////////
//  Load Google Scripts
        const googleScriptTag = document.createElement('script')
        googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
        document.head.appendChild(googleScriptTag)
        googleScriptTag.onload = () => {
            // the global gapi variable is created by loading that script
            gapi.load('auth2', () => {
                auth2 = gapi.auth2.init({
                    client_id: "837329520831-ds6cdvk7ruoegv5ln9mvb0fq5h6gn80n.apps.googleusercontent.com",
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                })
            })
        }

</script>