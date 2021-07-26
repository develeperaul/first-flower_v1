<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    const favorite = localStorage.getItem('favorite');
    if (favorite) {
      try {
        const obj = JSON.parse(favorite);
        this.$store.commit('cards/setFavorites', obj);
      } catch (e) {
        localStorage.removeItem('favorite');
      }
    }
  },
  mounted() {
    this.$store.dispatch('auth/getProfile');
  },
};
</script>
