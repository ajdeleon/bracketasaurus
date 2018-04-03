<template>
  <div class="closed">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'closed',
  data () {
    return {
      msg: 'This is the closed page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.closed {
  border: 4px solid red;
}

</style>
