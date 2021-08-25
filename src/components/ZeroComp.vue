<template>
  <q-page class="tw-flex tw-flex-col tw-justify-around p-content">
    <div class="tw-flex tw-flex-col tw-items-center">
      <Icon
        v-if="hasImg"
        :name="nameIcon"
      />
      <!-- <q-img v-if="hasImg" class="tw-w-10 tw-h-10 rounded" src="/basketFlower.svg" /> -->
      <span class="tw-text-2xl tw-font-semibold tw-text-center tw-mt-6">{{text}}</span>

    </div>
    <!-- <BaseButton v-if="to" :text="textBtn" :to="to"/> -->
      

      <router-link 
      v-if="to"
      custom 
      :to="to" 
      
      style="padding-top: 14px; padding-bottom: 14px; line-height: 24.5px; font-size: 20px"
      class="tw-bg-secondary tw-rounded-full tw-text-white tw-text-center "
      >
      <button
      
      
      type="button">
        {{textBtn}}
      </button>
      </router-link>

    
    <button
      v-else
      @click="openMenu"
      class="tw-bg-secondary tw-rounded-full tw-text-white "
      type="button"
      style="padding-top: 14px; padding-bottom: 14px; line-height: 24.5px; font-size: 20px"
    >
      {{textBtn}}

    </button>

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
      required: false,
      type: String
    },
    textBtn: {
      required: true,
      type: String
    },
    to: {

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
  methods: {
    openMenu () {
      this.$store.commit("categories/clickMenu")
    }
  }

}
</script>
