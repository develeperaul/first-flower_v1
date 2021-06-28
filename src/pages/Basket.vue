<template>
  <q-page v-if="!products.length" class="tw-flex tw-flex-col tw-justify-around tw-p-0">
    <div class="tw-flex tw-flex-col tw-items-center">
      <q-img class="tw-w-10 tw-h-10 rounded" src="../assets/basketFlower.svg" />
      <span>Ваша корзина пуста</span>
    </div>

    <BaseButton class="tw-text-xl" text="Перейти в каталог" />
  </q-page>

  <q-page v-else  class="tw-flex tw-flex-col tw-justify-between">
    <div>
      <q-card
        v-for="product in products"
        :key="product.id"
        class="my-card tw-mt-6 tw-p-0"
        flat
        
      
      >

        <div class="tw-grid tw-grid-cols-3">
          <!-- <div class="tw-bg-center tw-bg-contain tw-bg-no-repeat"
          style="background-image: url(/flower.jpg); height: 105px; max-width: 105px " 
          ></div>-->
          <img class="tw-flex-shrink-0"  src="/flower.jpg" alt="" style="border-radius: 5px " > 
          <div class="tw-col-span-2">
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
              <h4 class="tw-text-sm tw-font-medium">{{ product.title }}</h4>

              
                <q-icon @click="removeProduct(product.id)" size="24px" color="info" name="close" />
              
          </div> 
          <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
            <BaseGroupButton
                :count="product.count"
                @incrementCount="incrementCount(product, $event)"
              />

              <span class="tw-text-xl tw-font-semibold">{{ product.price }}.</span>
          </div> 
          </div>
          
        </div>
      </q-card>
    </div>
    <div class="tw-bg-secondary-light tw-pb-12 tw-pt-5">
      <div class="tw-flex tw-justify-between tw-mb-7">
        <span>Итого</span>
        <span>3090 руб.</span>
        
      </div>
      <BaseButton class="tw-w-full" text="Оформить заказ"/>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    incrementCount(id, value) {
      this.$store.dispatch(`basket/${value}Count`, id);
    },
    removeProduct(id) {
      this.$store.dispatch("basket/remove", { id });
    },
  },
  computed: {
    products() {
      return this.$store.state.basket.products;
    },
  },
};
</script>
