<template>
  <q-btn
    class="py-3"
    unelevated
    :rounded="rounded"
    :color="color"
    :to="{ name: 'favorite' }"
    no-caps
    >{{ text }}
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
  },
  // name: 'ComponentName',

};
</script>
