<template>
  <q-btn-group
    class="btn-color flex items-center w-28 min-w-min h-10"
    unelevated
    spread
    rounded
  >
    <q-btn icon="remove" round @click="incrementCount('decrement')" />
    <span>{{ count }}</span>

    <q-btn icon="add" @click="incrementCount('increment')" />
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
