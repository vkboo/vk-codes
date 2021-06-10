<template>
  <div id="app">
    <router-link to="/">GO INDEX</router-link>
    |
    <router-link to="/About">GO About</router-link>
    <hr>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>