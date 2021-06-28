<template>
  <div>
    <div class="relative" @click="openChange">
      <h2 class="text-center">{{ title }}</h2>

      <q-icon
        name="arrow_back_ios"
        class="absolute bottom-2/4 transform translate-y-2/4 right-0"
      />
    </div>
    <div v-if="open">
      <p class="text-center">
        {{ text }}
      </p>
    </div>
    <BorderLine border="b" class="" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openChange() {
      this.open = !this.open;
    },
  },
  // name: 'ComponentName',

};
</script>
