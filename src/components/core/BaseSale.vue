<template>
  <q-card
      class="my-card tw-text-white tw-flex tw-justify-between  tw-pt-0 "
      :style="{ background: color }"
  >
    <q-card-section class="tw-p-0 tw-my-5 tw-ml-6 tw-flex-grow">
        <div class="tw-mb-3">
          <span class="text-color tw-text-lg tw-font-medium"> {{ title }}</span>
        </div>
        <template>
          <slot></slot>
        </template>
  
    </q-card-section>
     <q-card-section class="tw-p-0 tw-flex tw-items-end tw-flex-grow-0">
        <img
          class="w-10 tw-h-auto tw-max-w-full "
          src="/image1.png"
          alt=""
        />
        
      </q-card-section>
  </q-card>
  
</template>

<script>
export default {
  // class=" tw-pb-0 tw-flex tw-flex-col tw-justify-end"??
  // name: 'ComponentName',
  props: {
    color: {
      default: "#fffff",
      type: String,
      required: false
    },
    title: {
      default: "#fffff",
      type: String,
      required: false
    },

  },
  
};
</script>
<style></style>
