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
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      try {
        this.$store.commit("profile/getPhone", JSON.parse(localStorage.getItem("accessToken")).phone)
      }
      catch (e) {

      }
    }

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
    
  },
};
</script>
