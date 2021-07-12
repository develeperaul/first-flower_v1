<template>
  <q-layout view="hhh LpR fff" container style="height: 100vh">
      <q-header reveal class="bg-white ">
      <q-toolbar class="tw-relative">
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="menu"
          @click="toggleMenu"
          class="tw-absolute"
        />
        <div class="logo tw-m-auto">
          <img src="/logo.svg" alt="" />
        </div>
        
      </q-toolbar>
        <BorderLine />
      </q-header>

      <q-footer class="bg-white">
        <BorderLine/>
      <q-toolbar class="flex justify-between tw-pt-2.5">
        <NavLink name="home" />
        <NavLink name="favorite" />
        <NavLink name="basket" />
        <NavLink name="sale" />
        <NavLink name="profile" />

      </q-toolbar>
      </q-footer>

      <q-drawer
        v-model="menu"
        :breakpoint="700"
        bordered
        overlay
        behavior="desktop"
        :width="width"
        :mini-width="300"
        content-class="gradient-green tw-pt-6 "
      >
        <div v-if="!title" class="tw-text-center tw-mb-3.5 tw-pl-4" >
          <span>Категории</span>
        </div>
        <div v-else class="tw-text-center tw-mb-3.5 tw-relative  p-content " >
          <q-icon
            @click="getParent"
            name="arrow_back_ios"
            class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 tw-pl-7 "
          ></q-icon>
          <span>{{title}}</span>
        </div>
        <div v-for="(item,index) in list" :key="index" @click="getChildren(item) " >
          <div class="tw-flex tw-justify-between tw-items-center p-content tw-py-5 tw-ml-4">
            <span class="tw-font-medium" >{{item.name}}</span>
            <q-icon
              v-if="!title"
              name="arrow_forward_ios"
              class=""
            />
          </div>
          <BorderLine/>
        </div>
        
      </q-drawer>
      <q-page-container >
        <router-view class="tw-my-2.5" />
      </q-page-container>
    </q-layout>

</template>
<script>

import { mapGetters } from "vuex";

import NavLink from "components/NavLink";
import BaseListDrawer from "components/BaseListDrawer";
import Cards from "components/Cards"

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
      title: null,
      

      cards: false,
      // leftDrawerOpen: this.menu,
      
      titleButton: false,
      listButton: true,
      cards: false,
      width: 0
    };
  },
    methods: {
      toggleMenu(){
        console.log('toogle')
        this.$store.commit("categories/clickMenu")

      },
      async getSectionList(){
        await this.$store.dispatch("categories/getSections");
        this.list = this.sections
      },
      


    updateWidth() {
      this.width = window.innerWidth;
    },
    async getChildren(item){
      if(this.title === null){
        await this.$store.dispatch("categories/getSubSectionList", item.id)
        this.title = item.name
        this.list = this.subSection
      }else{
        this.$store.commit("categories/clickMenu")
        this.$router.push({name: 'cards', params:{id: item.id, item: item}})
      }
      
      
    },
    getParent(){
      this.list = this.sections;
      this.title = null;
    }
  },
  
  computed: {
    ...mapGetters("categories", ["sections", "subSection", "menu"]),
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
    return this.getSectionList()
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
