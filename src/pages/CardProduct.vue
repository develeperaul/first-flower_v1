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
      <q-carousel-slide name="style" class="tw-p-0 " ref="slide" img-src="/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="tw-p-0" img-src="/image.png">
        
      </q-carousel-slide>
      <q-carousel-slide name="map" class="tw-p-0" img-src="/flower.jpg">
       
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
  

    <div class="tw-pt-4">
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
          {{count}}
        </span>
      </div>
      <Slider :valueSlider.sync="count" />

      <BorderLine class="-m-content tw-mt-9 tw-mb-6"/>
      <div class="tw-mb-5 tw-font-semibold tw-text-xl">
          <span class="">Вид упаковки</span>
        </div> 
      <div class="tw--mr-3.5">
        <Hooper
          :settings="hooperSettings"
          style="height: 145px">
          <Slide
            
            v-for="item in 5"
            :key="item"
            >
                <div class="el-slide tw-flex tw-flex-col">
                  <div
                    style="
                      background: url('/mini.png') center no-repeat;
                      background-size: cover;
                      width: 100%;
                      min-height: 76px;
                    "
                    class="tw-mb-4"
                  >
                     
                  </div>
                  <span class="tw-text-xs tw-mb-2.5" >Крафт</span>
                  <span class="tw-text-xs tw-font-semibold tw-text-secondary">490&nbsp;руб.</span>
              </div>
          </Slide>
          
        </Hooper>
      </div>
      <div class="tw-mt-4">
        <span class="tw-text-sm">
          Параметры упаковки (цвет и т.д.) укажите в комментарии к заказу
        </span>
      </div>
    </div>    
    <BorderLine class="-m-content tw-mt-6"/>
    

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
import { Hooper, Slide } from 'hooper';

import Slider from 'components/Slider'
import {mapGetters} from 'vuex'

export default {
  components:{
    Slider,
    Hooper,
    Slide
  },
   data () {
    return {
      rangeValue: 0,
      count: 15,
      slide: 'style',
      hooperSettings: {
        trimWhiteSpace: true,
        transition: 700,
        // autoPlay: true,
        // playSpeed: 3500,
        itemsToShow: 4
      }
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



.hooper-slide{
  width: 99px;
  height: 145px;
  border: 1px solid #e0e0e0e0;
  border-radius: 5px;
  margin-right: 12px;
  text-align: center;
}
</style>
