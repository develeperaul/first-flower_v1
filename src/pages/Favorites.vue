<template>
  <q-page  v-if="favorite" class="p-content">

    <BaseList :cards="favoriteCard " class="tw-grid tw-grid-cols-2 tw-gap-4"/>

  </q-page>
  <ZeroComp
    v-else
    text="В избранном пока ничего нет"
    textBtn="Перейти в каталог" />

</template>

<script>
import { mapGetters } from "vuex";
import ZeroComp from 'components/ZeroComp'
import BaseList from "components/BaseList.vue";
// class="tw-flex tw-flex-center "
export default {
  name: "PageIndex",
  components: {
    BaseList,
    ZeroComp,
  },
  data(){
    return {
      favoriteCard: null
    }
  },
  methods: {
    async getCard(id){
      await this.$store.dispatch('cards/getCard', id)
    },
    async getFavorites(){
      let cardFavorite = []
      this.getCard()
      if(this.favorite){
        for(let key in this.favorite){
         await this.getCard(key)
          cardFavorite.push(this.card)
        }
        this.favoriteCard = cardFavorite
      }
      
    
      
      
    },

  },

  created() {
    

    this.getFavorites()
  },
  computed: {
    ...mapGetters("cards", ["favorite", "card"])
  }
};
</script>
<style scoped lang="scss"></style>
