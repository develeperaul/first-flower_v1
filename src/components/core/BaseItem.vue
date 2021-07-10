<template>
  <q-card flat class="tw-border my-card ">
    
      <img 
        src="../../statics/flower.jpg" 
        @click="linkCard"
      />
    <q-btn
      round
      unelevated
      
      class="tw-absolute tw-top-0 tw-bg-white tw-right-0 border-inset tw-m-2.5"
      
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
          flat
          round
          size="8px"
          class=" tw-border tw-border-primary tw-border-solid"
          :class="[isActive ? active : inactive]"
        >
          <Icon name="basket" :color="isActive ? '#ffffff' : '#838383'" class="tw-w-4 tw-h-3 " />
          
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
  data(){
    return {
      isActive: false,
      active: "tw-bg-secondary",
      inactive: "tw-bg-white"
    }
  },
  methods: {
    // ...mapActions(basket, ["addProductToCart"]),
    addProductToCart() {
      
      if(this.isActive){
        this.$store.commit("basket/remove", this.card)  
      }else{
      this.$store.commit("basket/add", this.card)
      
      }
      // this.$store.dispatch("basket/addProductToCart", this.card);
      this.isActive = !this.isActive
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
