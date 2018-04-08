<template>
  <div class="main">
    <div class="empty">Empty Container</div>
    <div class="sidebar">
      <router-link class="div1" to="current"><div>Current Brackets</div></router-link>
      <router-link class="div2" to="closed"><div>Closed Brackets</div></router-link>
      <router-link class="div3" to="browse"><div>Browse Brackets</div></router-link>
      <router-link class="div4" to="options"><div>Options</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style>
.main {
  display: flex;
  height: 100%;
}

.empty {
  flex: 1;
}

.sidebar {
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.div1, .div2, .div3, .div4 {
  color: inherit;
  flex: 1;
  border: solid 1px black;
  text-decoration: none;
}

h1 {
  margin:0;
}
</style>
