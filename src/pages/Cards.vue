<template>
  <ZeroComp
    v-if="cards.length === 0  && cards[0] == null" 
     text="В этой категории пока нет товаров" textBtn="Перейти в каталог"
    />
  <q-page v-else class="p-content">
    
    <div class="tw-text-center tw-mb-7  tw-relative">
      <q-icon
            @click="getParent"
            name="arrow_back_ios"
            class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 "
      >
      </q-icon>
      
      <span class="tw-font-semibold">{{listName}}</span>  
    </div>
    
    <BaseList :cards="newCards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
    
  </q-page>
  
</template>

<script>
import { mapGetters } from "vuex";
import ZeroComp from "components/ZeroComp"
import BaseList from "components/BaseList.vue";

import {QSpinnerPuff} from 'quasar'

  
export default {

    components: {
    BaseList,
    ZeroComp
  },
  
  // name: 'PageName',
  data(){
    return{
     
      
    }
  },
  methods:{
    onChangeBack(){
      // this.$router.go(-1)
      this.$router.push({name: 'home', params: {menuOpen: true}})
      
    },
    getFavorites(){
      this.$store.dispatch("cards/getFavorite")
    },
    async getCards(id){
      await this.$store.dispatch("cards/getList", id)
    },
    getParent(){
      this.$store.commit("categories/clickMenu")
      // this.$router.go(+1)
      
      
    }
  },
  computed: {
    ...mapGetters(
      
      "cards", ["cards","listName" , "favorite", ]
      
    ),
    newCards(){
      
      return this.favorite.length === 0 ? this.cards : this.cards.map(item=>{
        
        for(let i=0; i<this.favorite.length; i++){
            if(item.id == this.favorite[i].id){
              
            return this.favorite[i]
            }
            else{
            return item
            }
            
        }
        
    })
    }
    
    

  },
  
  created(){
    this.getFavorites()
    this.$q.loading.show(
      {
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      }
    )  
      return this.getCards(this.$route.params.id).then(()=>{
        this.$q.loading.hide()  
      })
      
  },
  beforeRouteUpdate(to, from, next){
    this.$q.loading.show(
        {
          spinner: QSpinnerPuff,
          spinnerSize: 240,
          
        }
      )
    this.getCards(to.params.id).then(()=>{
            this.$q.loading.hide()  
    }) 
    next(()=>{
      
    })
  }
}
</script>
