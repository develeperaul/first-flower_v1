<template>
  <!-- <q-page padding>
  
        <div class="tw-text-center" @click="onChangeBack">{{namePage}}</div>
        <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page> -->
  <q-page class="p-content">
    
    <div class="tw-text-center tw-mb-7  tw-relative">
      <q-icon
            @click="getParent"
            name="arrow_back_ios"
            class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 "
      >
      </q-icon>
      <span class="tw-font-semibold">{{name}}</span>  
    </div>
    <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import BaseList from "components/BaseList.vue";
import store from 'src/store';
import { subSection } from 'src/store/categories/getters';

export default {

    components: {
    BaseList
  },
  
  // name: 'PageName',
  data(){
    return{
      namePage: null,
      
    }
  },
  methods:{
    onChangeBack(){
      // this.$router.go(-1)
      this.$router.push({name: 'home', params: {menuOpen: true}})
      
    },
    async getCards(id){
      await this.$store.dispatch("cards/getList", id)
    },
    getParent(){
      this.$store.commit("categories/clickMenu")
      this.$router.go(-1)
      
      
    }
  },
  computed: {
    ...mapGetters(
      
      "cards", ["cards"], 
      
    ),
    name(){

      const subSection = this.$store.state.categories.subSection
      // this.$store.getters.categories.subSection
      if(subSection){
        for(let key in subSection){
          if(subSection[key].id == this.$route.params.id){
            console.log(true)
            return subSection[key].name
          }
        }
      }else{
        console.error("ПРОГУЗИТЕ ПОДСЕЦИИ ДЛЯ ПОЛУЧЕНИЯ ИМЕНИ СТРАНИЦЫ");
      }
      
      
      
    }
    

  },
  
  created(){
    // this.$store.dispatch("cards/cardList", this.namePage)
    
    
    
    
      return this.getCards(this.$route.params.id)
    
    
    // await this.$store.dispatch("cards/getList", item.id)
    
  },
    beforeRouteEnter(to, from, next){
      console.log(to, from)
      next(vm=>{
        // // vm.$store.dispatch("cards/getList", to.params.id)
        // console.log(from)
        // if(to.params.item){
        //   vm.namePage = to.params.item.name  
        // }else{
        //   vm.namePage = "не передано"
        // }
        
      })
    },
  
  // beforeRouteUpdate(to, from, next){
  //     this.namePage = to.params.item.name
  //        console.log(to, from)
  //     this.getCards(to.params.item.id)
      
  //     next(()=>{
        
        
  //     })
  // },
  // beforeRouteLeave(to, from , next){
  //     console.log(to, from)
  //     next()
  // },
  
}
</script>
