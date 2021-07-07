<template>
  <q-card flat class="tw-border my-card ">
    
      <img 
        src="../../statics/flower.jpg" 
        @click="linkCard"
      />
    <q-btn
      round
      unelevated
      color="white"
      class="tw-absolute tw-top-0  tw-right-0 border-inset tw-m-2.5"
      
      size="8px"
    >
      <q-icon name="favorite" color="info" />
    </q-btn>
    
    
    <q-card-section class="tw-p-3">
      <div class="tw-text-sm">{{ card.title }}</div>
      <div class="tw-font-semibold tw-text-xl tw-flex tw-justify-between tw-items-end">
        <span> 
          {{ card.price }}
        </span>
        <q-btn
          @click="addProductToCart"
          outline
          round
          color="accent"
          size="8px"
          :style="{}"
        >
          <Icon name="basket" class="tw-w-4 tw-h-3" />
          
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
// import ShopIcon from "../icons/ShopIcon.vue";
// import basket from "src/store/basket";
// import { mapActions } from "vuex";
export default {
  // components: { ShopIcon },
  name: "BaseItem",
  props: {
    card: {
      type: Object,
      reqaured: true,
    },
  },
  methods: {
    // ...mapActions(basket, ["addProductToCart"]),
    addProductToCart() {
      this.$store.dispatch("basket/addProductToCart", this.card);
    },
    linkCard(){
      console.log('linkCard', this.card.id)
      this.$router.push({name:'cardproduct', params: {id: this.card.id}})
    }
  },
};
</script>
<style scoped lang="scss">
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
