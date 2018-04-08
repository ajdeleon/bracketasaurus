<template>
  <div class="container">
    <h1>Please sign up to continue</h1>
    <form v-on:submit.prevent="console.log(hey)"class="login">
      <input type=text placeholder="Username or email">
      <input type=text placeholder="Password">
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

</style>
