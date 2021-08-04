<template>
  <div v-if="!products.length">
    <ZeroComp
      text="Ваша корзина пуста"
      textBtn="Перейти в каталог"
    />
  </div>
  <div v-else>
    <q-page class="tw-flex tw-flex-col">
      <div class="p-content tw--my-3.5">
        <div
          v-for="(product, index) in products"
          :key="product.id"
        >
          <div class="indent tw-mt-3.5 tw-p-0 tw-flex tw-justify-between">
            <q-img
              v-if="product.img"
              :src="`http://flowers.2apps.ru${product.img}`"
              width="105px"
              height="105px"
              class="tw-rounded-md tw-flex-shrink-0"
            />

            <q-img
              v-else
              src="no_photo.png"
              width="105px"
              height="105px"
              class="tw-rounded-md tw-flex-shrink-0"
            />

            <div class="
                tw-flex-1 tw-flex tw-flex-col tw-justify-between tw-ml-5
                sm:tw-ml-2.5
              ">
              <div class="
                  tw-flex tw-justify-between tw-items-center tw-flex-nowrap
                ">
                <h4 class="tw-text-sm tw-font-medium">{{ product.name }}</h4>

                <q-icon
                  @click="removeProduct(product.id)"
                  size="14px"
                  color="info"
                  name="close"
                />
              </div>
              <div class="tw-flex tw-justify-between tw-items-center">
                <BaseGroupButton
                  :count="product.count"
                  @incrementCount="incrementCount(product, $event)"
                  class="tw-mr-2.5"
                />

                <span class="tw-text-xl sm:tw-text-base tw-font-semibold">{{ product.price }}&nbsp;руб.</span>
              </div>
            </div>
          </div>

          <BorderLine
            v-if="index + 1 !== products.length"
            class="-m-content"
          />
        </div>
      </div>

      <div class="bg-total tw-flex tw-justify-between tw-my-12 tw-py-5 p-content">
        <span class="tw-text-xl">Итого</span>
        <span class="tw-text-xl tw-font-semibold">{{ amountProducts }} руб.</span>
      </div>
      <div class="p-content">
        <BaseButton
          class="tw-w-full"
          text="Оформить заказ"
          :to="{ name: 'delivery' }"
        />
      </div>
    </q-page>
  </div>
</template>

<script>
import ZeroComp from 'components/ZeroComp';
import { mapGetters } from 'vuex';
export default {
  // name: 'PageName',
  components: {
    ZeroComp,
  },

  data () {
    return {
      ph: '',
    };
  },
  methods: {
    incrementCount (id, value) {
      this.$store.dispatch(`basket/${value}Count`, id);
    },
    removeProduct (id) {
      this.$store.dispatch('basket/remove', { id });
    },
  },

  computed: {
    ...mapGetters('basket', ['amountProducts', 'products']),
    // products() {
    //   return this.$store.state.basket.products;
    // },
  },
  created () {
    this.$store.dispatch('basket/addToCart', ['12_1_1', '17_3_2', '10_2_6']);
  },
};
</script>
<style scoped>
.bg-total {
  background-color: #f3f3f3f3;
}
.indent {
  margin-top: 14px;
  margin-bottom: 14px;
}
</style>
