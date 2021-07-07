<template>
  <!-- <q-page padding>
  
        <div class="tw-text-center" @click="onChangeBack">{{namePage}}</div>
        <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page> -->
  <q-page class="p-content">
    <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import BaseList from "components/BaseList.vue";
export default {

    components: {
    BaseList
  },
  // name: 'PageName',
  data(){
    return{
      namePage: Object.values(this.$route.params)[0],
    }
  },
  methods:{
    onChangeBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters("cards", ["cards"]),

  },
  created(){
    this.$store.dispatch("cards/cardList", this.namePage)
    console.log(this.namePage)
  },
  
  
  beforeRouteUpdate(to, from, next){
    
      this.namePage = Object.values(to.params)[0]
      // this.$store.dispatch("cards/cardList", this.namePage)
      console.log(this.namePage)
      next()
  }
}
</script>
