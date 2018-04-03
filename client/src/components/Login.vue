<template>
  <div class="container">
    <div>
      <p>Please log in to continue</p>
      <form action="">
        <input type=text placeholder="Username or email">
        <input type=text placeholder="Password">
        <input type="submit">
      </form>
    </div>
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

