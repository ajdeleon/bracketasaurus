<template>
  <div id="app">
    <header>
      <ul>
        <li>Bracketasaurus</li>
        <li id="login"><a href="">Login</a></li>
      </ul>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* #35495e */
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#login {
  margin-left: auto;
  margin-right: 40px;
}

#login a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.25s;
}

#login a:hover {
  color:#42b883;
  transition: color 0.4s;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 24px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header ul {
  display: flex;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  list-style-type: none;
}
</style>
