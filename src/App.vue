<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    const favorite = localStorage.getItem('favorite') ;
    const basket = localStorage.getItem('basket');
    console.log(favorite, basket)
    if (favorite) {
      try {
        
        const obj = JSON.parse(favorite);
        this.$store.commit('cards/setFavorites', obj);
      } catch (e) {
        localStorage.removeItem('favorite');
      }
    }

    if(basket) {
      try {
        const obj = JSON.parse(basket);
        console.log(obj)
        this.$store.commit('basket/setBasket', obj)
      } catch (e) {
        localStorage.removeItem('basket');
      }
    }
  },
  mounted() {
    this.$store.dispatch('auth/getProfile');
  },
};
</script>
