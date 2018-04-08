<template>
  <div class="current">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'current',
  data () {
    return {
      msg: 'This is the current brackets page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.current {
  border: 4px solid black;
}

</style>
