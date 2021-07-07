<template>
  <q-layout view="hhh LpR fff" container style="height: 100vh">
      <q-header reveal class="bg-white">
      <q-toolbar class="tw-relative">
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="tw-absolute"
        />
        <div class="logo tw-m-auto">
          <img src="../assets/logo.svg" alt="" />
        </div>
        
      </q-toolbar>
      <BorderLine />
      </q-header>

 

      <q-drawer
        v-model="leftDrawerOpen"
        :breakpoint="700"
        bordered
        overlay
        behavior="desktop"
        :width="width"
        :mini-width="300"
        content-class="gradient-green  "
      >
      
        <div class="tw-relative p-content tw-text-center" @click="getParent">
          <q-icon
          v-if="titleButton"
            name="arrow_back_ios"
            class="tw-absolute tw-bottom-2/4  tw-transform tw-translate-y-2/4 tw-left-0"
          />  
          <span class="">{{list.name}}</span>
        </div>
        <div v-for="(list,index) in getCategories" :key="index" @click="getChildren(list)">

          <div class="tw-flex tw-justify-between tw-items-center p-content">
            <span>{{list.name}}</span>
          <q-icon
            v-if="listButton"
            name="arrow_forward_ios"
            class=""
          />
          </div>
          <BorderLine/>
        </div>
      </q-drawer>
      <q-page-container>
        <router-view class="tw-my-2.5"/>
      </q-page-container>
    </q-layout>

</template>
<script>
import NavLink from "components/NavLink";
import BaseListDrawer from "components/BaseListDrawer";
import Cards from "components/Cards"


const findCategories = (stateObj, nameObj, cards)=> {
  const items= {}
  for(let key in stateObj){
    const item = stateObj[key]
    if(!cards){
      if(item.id === nameObj.parent){
      items[item.id] = {...item}
      }
    }else{
      console.log(item.parent);
      if(item.parent === nameObj.parent){
      items[item.id] = {...item}
      }
    } 
  }
  return items
}

export default {
  // name: 'LayoutName',
  components: {
    BaseListDrawer,
    NavLink,
    Cards
  },
  data() {
    return {
      list: null,
      title: '',
      cards: false,
      leftDrawerOpen: false,
      title: {name: "категории"},
      titleButton: false,
      listButton: true,
      cards: false,
      width: 0
    };
  },
    methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    getChildren(item){
      if(Object.keys(item.children).length !== 0){
        this.list = item
        // console.log('есть')
        // this.list = item.children
        // this.cards = false
      }else{
        this.$store.dispatch("cards/cardList", item.name)
        this.$router.push({name: 'cards', params: {categories: item.name}})
        this.title = item
        this.cards = true
      }
      
      
      // if(Object.keys(list.children).length === 0){
      //   // this.$store.dispatch("cards/cardList", list.name)
      //   // this.$router.push({name: 'cards', params: {categories: list.name}})
      //   this.cards = true
      //   this.title = list
        
      //   // this.categoriesList = this.$store.state.categories.categories
        
      // } else {
      //   this.categoriesList = Object.values(list.children)
      //   this.title = list
      //   this.titleButton = true
      //   this.listButton = false
      //   this.cards = false
      // }
    },
    getParent(){
    //   console.log(this.title)
    //  this.categoriesList = findCategories(this.$store.state.categories.categories, this.title)
    //  this.title = {name: 'Категории'}
    //  this.titleButton = false
    //     this.listButton = true
    //     this.cards = false
    
    this.list = findCategories(this.$store.state.categories.categories, this.title, this.cards)
    console.log('back')
    }
  },
  
  computed: {
    getCategories(){
      const categories = []
      // if(Object.values(this.list)[0].parent === null){
        // console.log(Object.values(this.list)[0].children.map(item=>item))
        let value
        if(Object.values(this.list)[0].parent === null) value = Object.values(this.list)[0].children;
        else value = this.list.children
        
        for(let key in value){
          
          categories.push(value[key])
        }
        
      return categories
       
      //  else{
      //   const items = Object.values(this.list).map(item=>{
      //   console.log(item)
      //   return item.children})
      // // console.log(items)
      // return items
      // //  return Object.values(this.categoriesList)
      // }
              
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
    this.$store.dispatch("categories/getList")
    this.list = this.$store.state.categories.categories
    this.title = Object.values(this.list)[0].name
  },


};
</script>

<style scoped lang="scss">
.active {
  color: red;
}
.gradient-green {
  background: linear-gradient(188.96deg, #ddece5 30.4%, #aec4ba 80.38%);
}
</style>
