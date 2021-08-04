<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import ZeroComp from "components/ZeroComp";

import { mapGetters } from 'vuex';
export default {
  components: {

    ZeroComp
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('profile', ["phone"]),
    filled () {
      if (this.phone.length === 10) return true
      return false
    }
  },

  created () {
    if (this.phone) this.$router.push({ name: 'user', params: { id: this.phone } })
    else this.$router.push({ name: 'signin' })
  },



  // name: 'PageName',
};
</script>
