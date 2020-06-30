<template>
  <div class="navbar">
    <div class="nav-item" @click="navigateTo('home')">
      <router-link to="/" exact-active-class="exact-active-home">Home</router-link>
    </div>
    <div class="nav-item" @click="navigateTo('about')">
      <router-link to="/about" exact-active-class="exact-active-about">About</router-link>
    </div>
    <a href="#">Bios</a>
    <a href="#">Join us</a>
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  background-color: var(--bg-color3);
  margin-bottom: 3em;
}
a {
  text-decoration: none;
  color: var(--bg-color1);
}
.nav-item {
  /* background-color: var(--bg-color1); */
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1em;
  padding-right: 1em;
}
.exact-active-about {
  color: var(--text-color3);
}
.exact-active-home {
  color: var(--text-color3);
}
</style>