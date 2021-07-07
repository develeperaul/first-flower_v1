<template>
  <div v-if="!products.length">
<ZeroComp text="Ваша корзина пуста" textBtn="Перейти в каталог" :to="{name: 'favorite'}"/>
      
        
  </div>
  <div v-else>
    <q-page   class="tw-flex tw-flex-col tw-justify-between ">
    <div class="p-content">
      <q-card
        v-for="product in products"
        :key="product.id"
        class="my-card tw-mt-6 tw-p-0"
        flat
        
      
      >

        <div class="tw-grid tw-grid-cols-3">
          <img class="tw-flex-shrink-0"  src="/flower.jpg" alt="" style="border-radius: 5px " > 
          <div class="tw-col-span-2 tw-flex tw-flex-col tw-justify-between tw-ml-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
              <h4 class="tw-text-xs tw-font-medium">{{ product.title }}</h4>

              
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
    <div class="tw-bg-secondary-light  tw-pb-12 tw-pt-5 p-content">
      <div class="tw-flex tw-justify-between tw-mb-7">
        <span>Итого</span>
        <span>{{amountProducts  }} руб.</span>
        
      </div>
      <BaseButton class="tw-w-full" text="Оформить заказ" :to="{name: 'delivery'}"/>
    </div>
  </q-page>
  </div>
  
</template>

<script>
import ZeroComp from 'components/ZeroComp';
import {mapGetters} from 'vuex';
export default {
  // name: 'PageName',
  components: {
    ZeroComp
  },

  data(){
    return{
      ph: ''
    }
  },
  methods: {
    incrementCount(id, value) {
      this.$store.dispatch(`basket/${value}Count`, id);
    },
    removeProduct(id) {
      this.$store.dispatch("basket/remove", { id });
    },
  },
  
  computed: {
    ...mapGetters(
      "basket", ["amountProducts"]
    ),
    products() {
      return this.$store.state.basket.products;
    },
  },
};
</script>
<style scoped>
 
</style>
