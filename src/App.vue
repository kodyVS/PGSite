<template>
  <div id="app">
    <h1>PG-Site</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png">-->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
    // HelloWorld
  }
};
</script>

<style global>
:root {
  --bg-color1: #2e3440;
  --bg-color2: #3b4252;
  --bg-color3: #434c5e;
  --bg-color4: #4c566a;
  --text-color1: #d8dee9;
  --text-color2: #e5e9f0;
  --text-color3: #eceff4;
  --accent-color1: #8fbcbb;
  --accent-color2: #88c0d0;
  --accent-color3: #81a1c1;
  --accent-color4: #5e81ac;
}
h1 {
  color: var(--text-color3);
  margin-top: 0;
  padding-top: 0;
}
html {
  background-color: #2e3440;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color3);
  margin-top: 2em;
}
</style>
