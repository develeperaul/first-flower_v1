<template>
  <q-page class="p-content">      
    <NamePage :text="card.name" @getBackPage="getBackPage"/>
    <q-carousel
      v-if="card.add_imgs"
      v-model="slide"
      swipeable
      infinite
      transition-prev="slide-right"
      transition-next="slide-left" 
      control-type="flat"
      animated
      height="100%"
      ref="carousel"
      class="tw--mx-3 "  
    > 
    
      <q-carousel-slide v-for="(item, index) in card.add_imgs" :key="index" :name="index+1" class="tw-p-0 " >
        <div
          :style="
          `background-image: url(http://flowers.2apps.ru${item});`"
          class="image-pos "
        >

        </div>
        <!-- <img :src="`http://flowers.2apps.ru${item}`" alt=""> -->
        
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
    <div v-else class="-m-content">
      <div
        :style="
        `background-image: url(http://flowers.2apps.ru${card.img});`"
        class="image-pos "
      >
      </div>
    </div>
    <BorderLine class="-m-content tw-mt-4"/>
    <div class="tw-pt-4">
      <div class="tw-mb-5 tw-font-semibold tw-text-xl">
        <span class="">Описание</span>
      </div>
      <div class="tw-mb-4 tw-text-xl">
        <span >{{card.text}}</span>
        
      </div>
      <div>

      <BorderLine class="-m-content tw-mt-12 tw-mb-6"/>

      </div>
        <div class="tw-flex tw-justify-between tw-items-center tw-mb-8">
        <span class="tw-text-xl tw-font-semibold">Количество цветов</span>
        <span >
          <input class="input-current tw-font-medium count tw-flex tw-justify-center tw-items-center tw-text-center " type="number" :value="count" @input="setCurrentCount">
          
        </span>
      </div>
      <Slider :valueSlider.sync="count"  :min="min" :max="max"/>

      <BorderLine class="-m-content tw-mt-9 tw-mb-6"/>
      <template v-if="isPackage">
        <div class="tw-mb-5 tw-font-semibold tw-text-xl">
            <span class="">Вид упаковки</span>
          </div> 
        <div class="tw--mr-3.5">
          <Hooper
            :settings="hooperSettings"
            style="height: 145px">
            <Slide>
              <div class="el-slide tw-flex tw-flex-col">

                 <div>
                   <q-img
                    src="/upak_lenta.png"
                    height="68px"
                    class="tw-mb-4"
                   />
                  </div>
                  <span class="tw-text-xs tw-mb-2.5" >Лента</span>
                  <span class="tw-text-xs tw-font-semibold tw-text-secondary">{{card.upak_lenta}}&nbsp;руб.</span>
                </div>
            </Slide>
            <Slide>
              <div class="el-slide tw-flex tw-flex-col">
                  <div>
                    <q-img
                      src="/upak_fetr.png"
                      height="68px"
                      class="tw-mb-4"
                   />  
                  </div>
                  <span class="tw-text-xs tw-mb-2.5" >Фетр</span>
                  <span class="tw-text-xs tw-font-semibold tw-text-secondary">{{card.upak_fetr}}&nbsp;руб.</span>
                </div>
            </Slide>
            <Slide>
              <div class="el-slide tw-flex tw-flex-col">
                
                  <div>
                    <q-img
                      src="/upak_kraft.png"
                      height="68px"
                      class="tw-mb-4"
                   />  
                  </div>
                  <span class="tw-text-xs tw-mb-2.5" >Крафт</span>
                  <span class="tw-text-xs tw-font-semibold tw-text-secondary">{{card.upak_kraft}}&nbsp;руб.</span>
                </div>
            </Slide>
            <Slide>
              <div class="el-slide tw-flex tw-flex-col">
                
                  <div>
                    <q-img
                    src="/upak_kor.png"
                    height="68px"
                    class="tw-mb-4"
                   />  
                  </div>
                  <span class="tw-text-xs tw-mb-2.5" >Корейка</span>
                  <span class="tw-text-xs tw-font-semibold tw-text-secondary">{{card.upak_kor}}&nbsp;руб.</span>
                </div>
            </Slide>
          </Hooper>
        </div>
        <div class="tw-mt-4">
          <span class="tw-text-sm">
            Параметры упаковки (цвет и т.д.) укажите в комментарии к заказу
          </span>
        </div>
        <BorderLine class="-m-content tw-mt-6"/>
      </template>

    </div>    
    
    

    <div class="tw-flex tw-justify-between tw-items-center tw-pt-2.5 tw-pb-5">
      <span class="tw-text-2xl tw-font-bold">{{card.price}}&nbsp;руб.</span>
      <q-btn
        @click="addProductToCart"
        
        unelevated
        rounded="rounded"
        color="info"
        class="tw-px-4 tw-py-1.5"
        no-caps
        >
        <span class="tw-text-white tw-text-xl ">
          В корзину
        </span>
        
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
      min: 1,
      max: 201,
      count: 1,
      slide: 1,
      hooperSettings: {
        // trimWhiteSpace: true,
        transition: 700,
        // autoPlay: true,
        // playSpeed: 3500,
        itemsToShow: 4
      }
    }
  },
  methods:{
    setCurrentCount(e){
      const val = +e.target.value
      
      if(String(val).length>=String(this.min).length && String(val).length<=String(this.max).length){
        if(val>=0 && val <= this.max){
          if(val===0){
            this.count = this.min  
          }
          this.count = val
        }
      }
      this.$forceUpdate()
      
    },
    addProductToCart() {
      this.$store.dispatch("basket/addProductToCart", { ...this.card});
    },
    getBackPage(){
      this.$router.go(-1)
      // this.$router.push({name: 'cards', params: {categories: this.card.categories}})
    },
    getNullLabel (val) {
      return val === null ? 'null' : val
    },

    //для упаковки

  },
  computed: {
    ...mapGetters("cards", ["card"]),

    //для вида упаковки
     isPackage(){
       
       if(this.listPackge.length > 0){
         return true
       }else{
         return false
       }
     },
     listPackge(){
       const list = []
       for(let key in this.card){
         if(key.indexOf('upak_')===0){
            if(this.card[key] !== ""){
              
              list.push({[key]: this.card[key]})
            }
         }
       
       }
       return list
     }
  },
  beforeRouteEnter(to, from, next){
    
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

  .image-pos{
    background-size: cover;
    width: 66%;
    margin: 0 auto;
    margin-top: 37px;
    margin-bottom: 0;
    min-height: 275px;
    background: center no-repeat;
    background-size: cover;

  }

  .hooper-slide{
    min-width: 99px;
    height: 145px;
    border: 1px solid #e0e0e0e0;
    border-radius: 5px;
    margin-right: 12px;
    text-align: center;
  }

  .input-current{
    outline: none;
  }
</style>
