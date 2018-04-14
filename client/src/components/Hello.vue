<template>
  <div class="hello">
    <div class="form">
      <router-link class="links" to="/auth/google">Login</router-link>
      <router-link class="links" to="/signup">Sign Up</router-link>
      <router-link class="links guestLogin" to="/guest">Guest</router-link>
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

.form .links {
  color: initial;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  border: 1px solid gray;
  cursor: pointer;
  text-decoration: none;
}

.guestLogin {
  margin-top: 1rem;
}
</style>
