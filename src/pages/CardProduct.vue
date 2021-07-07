<template>
  <q-page class="p-content">
      
    <NamePage :text="card.title" @getBackPage="getBackPage"/>
    <q-carousel
      v-model="slide"
      swipeable
      infinite
      transition-prev="slide-right"
      transition-next="slide-left" 
      control-type="flat"
      animated
      height="335px"
      ref="carousel"
      class="tw--mx-3 "  
    >
      <q-carousel-slide name="style" class="tw-p-0 " ref="slide" img-src="../assets/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="tw-p-0" img-src="../assets/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="map" class="tw-p-0" img-src="../assets/flower.jpg">
       
      </q-carousel-slide>
      <template v-slot:control>
         <q-carousel-control
          class="tw-flex tw-justify-between tw-w-full tw-bottom-1/2 tw-transform tw-translate-y-1/2  tw-px-3.5"
          :offset="[0, 0]"
          
        >
          <q-btn
            flat dense  
            @click="$refs.carousel.previous()"
          >
            <img src="/prev.svg" alt="">
          </q-btn>
          <q-btn
            flat
            dense
            @click="$refs.carousel.next()"
          >
            <img src="/next.svg" alt="">
          </q-btn>
        </q-carousel-control>
      </template>
    </q-carousel>
    <BorderLine class="-m-content"/>
  

    <div class="tw-pt-4 tw-pb-9">
      <div class="tw-mb-5 tw-font-semibold tw-text-xl">
        <span class="">Описание</span>
      </div>
      
      <div class="tw-mb-4 tw-text-xl">
        <span >{{card.description}}</span>
        
      </div>
      <div>

      <BorderLine class="-m-content tw-mt-12 tw-mb-6"/>

      </div>
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-8">
        <span class="tw-text-xl tw-font-semibold">Количество цветов</span>
        <span class="tw-font-medium count tw-flex tw-justify-center tw-items-center">
          {{valueSlider}}
        </span>
      </div>
      
      <q-slider
      v-model="valueSlider"
      color="secondary"
      dense
      class="circle"
      :min="15"
      :max="201"
      label-always
    >
      
    </q-slider>
    
    </div>
    
    <BorderLine border="t" class="tw--mx-3 "/>
    <div class="tw-flex tw-justify-between tw-items-center tw-pt-2.5 tw-pb-5">
      <span class="tw-text-2xl tw-font-bold">2790руб</span>
      <q-btn
        @click="addProductToCart"
        class="py-3"
        unelevated
        rounded="rounded"
        color="info"
        
        no-caps
        >В корзину
      </q-btn>
      <!-- <BaseButton text="Купить" class="tw-px-8 tw-py-1"/> -->
    </div>

    

    
  </q-page>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  
   data () {
    return {
      rangeValue: 0,
      valueSlider: 15,
      // controlType: 'flat',
      // controlTypeOptions: [
      //   { value: 'regular', label: 'regular' },
      //   { value: 'unelevated', label: 'unelevated' },
      //   { value: 'flat', label: 'flat (default)' },
      //   { value: 'outline', label: 'outline' },
      //   { value: 'push', label: 'push' }
      // ],

      slide: 'style',
      
    }
  },
  methods:{
    addProductToCart() {
      this.$store.dispatch("basket/addProductToCart", this.card);
    },
    getBackPage(){
      this.$router.push({name: 'cards', params: {categories: this.card.categories}})
    },
    getNullLabel (val) {
      return val === null ? 'null' : val
    }
  },
  computed: {
    ...mapGetters("cards", ["card"]),
  },
  beforeRouteEnter(to, from, next){
    console.log(to.params)
    next(vm=>{
      vm.$store.dispatch('cards/getCard', to.params.id)
    })

  },


};
</script>
<style scoped lang="scss">
  .count{
    background-color: #EFEFEF;
    width: 139px;
    height: 44px;
    border-radius: 50px;
    
    
  }
  

</style>
