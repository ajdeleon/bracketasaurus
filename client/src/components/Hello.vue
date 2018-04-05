<template>
  <div class="hello">
    <div class="form">
      <button class="login" v-on:click="login">Login</button>
      <button class="signUp" v-on:click="signUp">Sign Up</button>
      <button class="guestLogin" v-on:click="guestLogin">Guest User</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    ...mapActions([
      'login',
      'signUp',
      'guestLogin'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  width: 12rem;
  margin-top: -16rem;
  border: 2px solid gray;
  padding: 2rem;
}

.form button {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  border: 1px solid gray;
  cursor: pointer;
}

.guestLogin {
  margin-top: 1rem;
}
</style>
