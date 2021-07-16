<template>
    <q-page  class="tw-flex tw-flex-col tw-justify-around p-content">
      <div class="tw-flex tw-flex-col tw-items-center">
        <Icon :name="nameIcon"/>
        <!-- <q-img v-if="hasImg" class="tw-w-10 tw-h-10 rounded" src="/basketFlower.svg" /> -->
        <span class="tw-text-2xl tw-font-semibold tw-text-center tw-mt-6">{{text}}</span>
      
      </div>
      <!-- <BaseButton v-if="to" :text="textBtn" :to="to"/> -->
      <q-btn
        v-if="to"
        :to="to"
        class="tw-py-2.5"
        
        unelevated
        rounded
        color="info"
        
        no-caps
        >
          <span class="tw-text-white tw-text-xl ">
            {{ textBtn }}
          </span>
      </q-btn>
      <q-btn
        type="button"
        v-else
        @click="openMenu"
        class="tw-py-2.5"
        
        unelevated
        rounded
        color="info"
       
        no-caps
        >
          <span class="tw-text-white tw-text-xl  ">
            {{ textBtn }}
          </span>
      </q-btn>
      
      
      
    </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    nameIcon: {
      default: "flower",
      required: false,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    textBtn: {
      required: true,
      type: String
    },
    to:{
      
      required: false,
      type: Object
    },
    hasImg: {
      required: false,
      default: true,
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods:{
    openMenu(){
      this.$store.commit("categories/clickMenu")
    }
  }

}
</script>
