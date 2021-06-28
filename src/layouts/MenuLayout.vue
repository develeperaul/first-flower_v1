<template>
  <q-layout class="px-3" view="hHh Lpr fFf">
    <q-header class="bg-white">
      <q-toolbar class="px-3 flex justify-between">
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <div class="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="search"
          
        />
      </q-toolbar>
      <BorderLine border="b" class="tw-mb-0" />
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      :width="width"
      :mini-width="300"
      content-class="gradient-green"

    >
      <q-toolbar class=" px-0 flex justify-between">
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="close"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <div class="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="search"
          
        />
      </q-toolbar>
      <BaseListDrawer  />
    </q-drawer>
    <q-page-container class="tw-px-3">
      
      <!-- This is where pages get injected -->
      <router-view class="tw-my-2.5"/>
    </q-page-container>
    <q-footer class="bg-white">
      <BorderLine border="t"  />
      <q-toolbar class="flex justify-between tw-mt-2.5">
        <NavLink name="home" />
        <NavLink name="favorite" />
        <NavLink name="basket" />
        <NavLink name="sale" />
        <NavLink name="profile" />

      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

import NavLink from "components/NavLink";
import BaseListDrawer from "components/BaseListDrawer";
export default {
  // name: 'LayoutName',
  components: {
    BaseListDrawer,
    NavLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      width: 0
    };
  },
    methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
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
