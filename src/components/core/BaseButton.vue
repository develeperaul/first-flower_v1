<template>
  <q-btn
    v-if="to"
    class="tw-py-2"
    :type="type"
    unelevated
    :rounded="rounded"
    :color="color"
    :to="to"
    no-caps
    style="margin-bottom: 24px"
    >
      <span class="tw-text-white tw-text-lg ">
        {{ text }}
      </span>
  </q-btn>
  

    <q-btn
    v-else
    class="tw-py-2"
    :type="type"
    unelevated
    :rounded="rounded"
    :color="color"
    
    no-caps
    >
      <span class="tw-text-white tw-text-lg ">
        {{ text }}
      </span>
  </q-btn>
</template>

<script>

export default {
  props: {
    rounded: {
      type: Boolean,
      required: false,
      default: true,
    },
    color: {
      type: String,
      default: "info",
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
      required: false
    },
    to:{
      type: Object,
      require: false
    }
  },
  // name: 'ComponentName',

};
</script>
