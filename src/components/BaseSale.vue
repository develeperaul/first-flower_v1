<template>
  <div v-if="sales.length > 1">
    <q-card
      v-for="sale in sales"
      :key="sale['id']"
      class="my-card tw-text-white tw-flex tw-justify-between tw-mb-1 tw-pt-0 "
      :style="{ background: sale.color }"
      flat
    >
      <q-card-section class="tw-p-0 tw-my-5 tw-ml-6 tw-flex-grow">
        <div class="tw-mb-3">
          <span class="text-color tw-text-xs tw-font-medium"> {{ sale.title }}</span>
        </div>

        <q-btn round color="white" unelevated>
          <q-icon color="dark" name="arrow_forward"></q-icon>
        </q-btn>
      </q-card-section>
      <q-card-section class="tw-p-0 tw-flex tw-items-end tw-flex-grow-0">
        <img
          class="w-10 tw-h-auto tw-max-w-full "
          src="../assets/image1.png"
          alt=""
        />
        <!--<div
          style="wight: 140px; height: 140px; background: url(../public/icons/image1.png) no-repeat center ;
  background-size: cover;"
        ></div>-->
      </q-card-section>
    </q-card>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  // class=" tw-pb-0 tw-flex tw-flex-col tw-justify-end"??
  // name: 'ComponentName',
  props: {
    sales: {
      default: "Акций на данный момент нет",
      // type: [Array, String],
      type: Array || String,
      required: false
    }
  }
};
</script>
<style></style>
