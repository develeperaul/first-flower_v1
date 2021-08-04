<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    // localStorage.setItem("favorite", JSON.stringify({22:true}));
    const favorite = localStorage.getItem('favorite');
    const basket = localStorage.getItem('basket');

    if (favorite) {
      try {

        const obj = JSON.parse(favorite);
        this.$store.commit('cards/setFavorites', obj);
      } catch (e) {
        localStorage.removeItem('favorite');
      }
    }

    if (basket) {
      try {
        const obj = JSON.parse(basket);

        this.$store.commit('basket/setBasket', obj)
      } catch (e) {
        localStorage.removeItem('basket');
      }
    }
  },
  mounted () {
    this.$store.dispatch('auth/getProfile');
  },
};
</script>
