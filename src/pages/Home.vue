<template>
  <div>
    <Search />
    <nav class="Nav">
      <router-link to="/add">add a product</router-link>
    </nav>
  </div>
</template>

<script>

import Search from "../components/Search.vue";

export default {
  components : {Search},
  mounted() {
    //this.$store.commit('increment')
  }
}
</script>

<style>
.Nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: lightblue;
  padding: 20px 0;
}
</style>