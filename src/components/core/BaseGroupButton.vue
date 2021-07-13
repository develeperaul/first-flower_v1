<template>
  <q-btn-group
    class="btn-color flex items-center w-28 min-w-min h-10"
    unelevated
    spread
    rounded
    
  >
    <q-btn size="5px" class="tw-pl-2.5  tw-pt-2.5 tw-pb-3 sm:tw-pl-1.5 sm:tw-pt-1.5 sm:tw-pb-2" round @click="incrementCount('decrement')" >
      <q-icon name="remove"></q-icon>
    </q-btn>
    <span class="tw-font-medium tw-pt-2.5 tw-pb-3 tw-px-3 sm:tw-pt-1.5 sm:tw-pb-2 sm:tw-px-1.5 ">{{ count }}</span>

    <q-btn size="5px" class="tw-pr-2.5 tw-pt-2.5 tw-pb-3 sm:tw-pr-1.5 sm:tw-pt-1.5 sm:tw-pb-2"  @click="incrementCount('increment')" >
      <q-icon name="add"></q-icon>
    </q-btn>
  </q-btn-group>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: this.count,
    };
  },
  methods: {
    incrementCount(value) {
      this.$emit("incrementCount", value);
    },
  },

  // name: 'ComponentName',

};
</script>
