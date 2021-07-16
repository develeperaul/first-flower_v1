<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import ZeroComp from "components/ZeroComp";

import {mapGetters} from 'vuex';
export default {
  components: { 

    ZeroComp  
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters('auth', {
      user: 'getUser'
    } ),
    filled(){
      if(this.phone.length === 10) return true
      return false
    } 
  },

  created(){
    // if(this.$store.state.auth.currentUser === null){
    //     this.$router.push({name: 'signin'})
    // }
  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
      const profileUser = vm.$store.state.auth
      if( profileUser.currentUser === null){
        vm.$router.push({name: 'signin'})
      } else {
        vm.$router.push({name: 'user', params: { id: profileUser.id}})
      }
      
    })
  },
  

  // name: 'PageName',
};
</script>
