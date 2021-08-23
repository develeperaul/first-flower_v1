<template>
  <q-card
    flat
    class="tw-border my-card tw-flex tw-flex-col tw-justify-between"
  >
    <div>
      <div
        v-if="card.img"
        @click="linkCard"
        :style="`background-image: url(http://flowers.2apps.ru${card.img});`"
        class="image-pos"
        style="border-top-left-radius: 4px; border-top-right-radius: 4px;"
      ></div>
      <div
        v-else
        @click="linkCard"
        :style="`background-image: url(no_photo.png);`"
        class="image-pos"
      ></div>
      <q-btn
        round
        unelevated
        class="tw-absolute tw-top-0 tw-bg-white tw-right-0 border-inset"
        style="margin:10px"
        @click="toggleFavorite"
        size="8px"
      >
        <q-icon
          :name="favorites && favorites[card.id] ? 'favorite' : 'favorite_border'"
          :class="[
            favorites && favorites[card.id]
              ? 'tw-text-info'
              : 'tw-text-border-icon',
          ]"
        />
      </q-btn>
    </div>

    <q-card-section class="tw-p-3">
      <div class="tw-text-sm">{{ card.name }}</div>
      <div class="
          tw-font-semibold tw-text-xl tw-flex tw-justify-between tw-items-end
        ">
        <span> {{ card.price }}&nbsp;руб. </span>
        <q-btn
          @click="addProductToCart"
          outline
          flat
          round
          size="8px"
          class="tw-border tw-border-primary tw-border-solid"
          :class="[this.products.find(item=>item.id.match(/\d+/g)[0] == this.card.id) ? active : inactive]"
        >
          <Icon
            name="basket"
            :color="this.products.find(item=>item.id.match(/\d+/g)[0] == this.card.id) ? '#ffffff' : '#838383'"
            class="tw-w-4 tw-h-3"
          />
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import cards from 'src/store/cards';
import { mapGetters } from 'vuex';
export default {
  // components: { ShopIcon },
  name: 'BaseItem',
  props: {
    card: {
      type: Object,
      reqaured: true,
    },
  },
  data () {
    return {
      isActive: false,
      active: 'tw-bg-secondary',
      inactive: 'tw-bg-white',
      favorite: {
        name: 'favorite_border',
        claaName: 'tw-text-border-icon',
      },
    };
  },
  methods: {
    addProductToCart () {
      if (this.products.find(item => item.id.match(/\d+/g)[0] == this.card.id)) {
        this.$store.dispatch('basket/removeProductCart', this.card);
      } else {
        this.$store.dispatch('basket/addProductToCart', this.card);
      }
      // this.$store.dispatch("basket/addProductToCart", this.card);
      this.isActive = !this.isActive;
    },
    linkCard () {

      this.$router.push({ name: 'cardproduct', params: { id: this.card.id } });
    },
    toggleFavorite () {

      if (this.favorites && this.favorites[this.card.id]) {
        this.$store.dispatch('cards/removeFavoriteItem', this.card);
      } else {
        this.$store.dispatch('cards/addFavoriteItem', this.card);
      }
    },
  },
  computed: {
    ...mapGetters({
      favorites: 'cards/favorite',
      products: 'basket/products'
    }),

  },
};
</script>
<style scoped lang="scss">
.image-pos {
  background-size: cover;
  width: 100%;
  min-height: 140px;
  background: center no-repeat;
  background-size: cover;
}
.basket {
  display: inline-block;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    box-sizing: border-box;
  }
}
</style>
