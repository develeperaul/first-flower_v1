<template>
  <q-card flat class="tw-border my-card ">
    
      <!-- <img 
        :src="`http://flowers.2apps.ru${card.img}`"
        
        @click="linkCard"
      /> -->
      <div
        @click="linkCard"
        :style="
          `background-image: url(http://flowers.2apps.ru${card.img});`"
        class="image-pos"
      >
      </div>
    <q-btn
      round
      unelevated
      
      class="tw-absolute tw-top-0 tw-bg-white tw-right-0 border-inset tw-m-2.5"
      @click="toggleFavorite"
      size="8px"
    >
      <q-icon
        
        :name="favorite.isActive ? 'favorite' : 'favorite_border'"
        :class="[favorite.isActive ? 'tw-text-info' : 'tw-text-border-icon']" />
      <!-- <q-icon name="favorite" class="tw-text-info" /> -->
    </q-btn>
    
    
    <q-card-section class="tw-p-3">
      <div class="tw-text-sm">{{ card.name }}</div>
      <div class="tw-font-semibold tw-text-xl tw-flex tw-justify-between tw-items-end">
        <span> 
          {{ card.price }}&nbsp;руб.
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
      inactive: "tw-bg-white",
      favorite: {
        isActive: false,
        name:"favorite_border",
        claaName: "tw-text-border-icon"
      }
    }
  },
  methods: {
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
    },
    toggleFavorite(){
      
      this.favorite.isActive = !this.favorite.isActive
    }
  },
};
</script>
<style scoped lang="scss">
  .image-pos{
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
