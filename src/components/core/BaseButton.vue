<template>
  <q-btn
    class="py-3"
    :type="type"
    unelevated
    :rounded="rounded"
    :color="color"
    :to="to"
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
    to: {
      type: Object,
      required: false,
      default: false
    }, 
    type: {
      type: String,
      default: 'button',
      required: false
    }
  },
  // name: 'ComponentName',

};
</script>
