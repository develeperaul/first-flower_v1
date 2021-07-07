<template>
    <q-page  class="tw-flex tw-flex-col tw-justify-around p-content">
      <div class="tw-flex tw-flex-col tw-items-center">
        <q-img v-if="hasImg" class="tw-w-10 tw-h-10 rounded" src="../assets/basketFlower.svg" />
        <span class="tw-text-xl tw-font-semibold tw-text-center">{{text}}</span>
      </div>
      
      <BaseButton class="tw-text-xl" :text="textBtn" :to="to"/>
    </q-page>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    text: {
      required: true,
      type: String
    },
    textBtn: {
      required: true,
      type: String
    },
    to:{
      required: true,
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
  }
}
</script>
