<template>
  <div class="tw-text-center tw-relative bg tw--mx-3 tw--mt-3 tw-py-4">
      
      <q-btn
        round
        size="10px"
        color="white"
        unelevated
        @click="getBackPage"
        class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 tw-ml-3 "
        >
        <q-icon
        color="dark"
        name="arrow_back"></q-icon>
      </q-btn>
      <span class="tw-text-base tw-font-medium">{{text}}</span>  
      
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  methods:{
    getBackPage(){
      this.$emit('getBackPage')
    }
  }
}
</script>
<style scoped lang="scss">
  .bg{
   background-color: #DDECE5; 
  }
</style>
