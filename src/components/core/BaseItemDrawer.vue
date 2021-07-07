<template>
  <div>
    <div class="tw-relative" @click="openChange">
      <h2 class="tw-text-center">{{ title }}</h2>

      <q-icon
        name="arrow_back_ios"
        class="tw-absolute tw-bottom-2/4 tw-transform tw-translate-y-2/4 tw-right-0"
      />
    </div>
    <div v-if="open">
      <p class="tw-text-center">
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
