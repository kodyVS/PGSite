<template>
  <div class="about">
    <div class="header">
      <h1>Meet the Team</h1>
    </div>
    <div class="content">
      <p>Knox talks about how awesome we are</p>
    </div>
    <div class="header">
      <h1>Team Leaders</h1>
    </div>
    <div class="content bios">
      <Bio />
      <Bio />
      <Bio />
    </div>
    <div class="header">
      <h1>Coders</h1>
    </div>
    <div class="content bios">
      <div class="scrollable">
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
      </div>
    </div>
  </div>
</template>

<script>
import Bio from "../components/Bio.vue";
export default {
  components: {
    Bio
  }
};
</script>

<style>
.bios {
  display: flex;
  justify-content: space-evenly;
}
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header {
  margin-top: 1em;
}
.content {
  padding: 2em;
  width: 60%;
  border-radius: 2em;
  background-color: var(--accent-color4);
  color: var(--text-color3);
}
.scrollable {
  -webkit-overflow-scrolling: touch;
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: var(--bg-color1);
    border-radius: 1em;
}
.scrollable > .bio {
  flex: 0 0 auto;
  margin-left: 1em;
}
</style>