<template>
  <q-page class="p-content tw-flex tw-flex-col tw-justify-between" v-if="card">      
    <NamePage :text="card.name" @getBackPage="getBackPage"/>
    <div v-if="card.add_imgs" class="tw-relative">
      <div class="tw-absolute tw-right-0 tw-top-4 tw-z-10 ">
            <q-btn
            round
            unelevated
            class="  tw-bg-white border-inset tw-mr-4"
            size="9px"
            >
              <Icon name="share"/>
            </q-btn>
            <q-btn
            round
            unelevated
            
            class=" tw-top-0 tw-bg-white tw-right-0 border-inset "
            @click="toggleFavorite"
            size="9px"
          >
            <q-icon
              
              :name="favorite && favorite[card.id] ? 'favorite' : 'favorite_border'"
              :class="[ favorite && favorite[card.id] ? 'tw-text-info' : 'tw-text-border-icon']" />
            
          </q-btn>
      </div>
    
      <q-carousel
        
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
    </div>
    <div v-else class="-m-content tw-relative">
      <div class="tw-absolute tw-right-0 tw--top-5 p-content">
            <q-btn
            round
            unelevated
            class="  tw-bg-white tw-right-0 border-inset tw-mr-4"
            size="9px"
            >
              <Icon name="share"/>
            </q-btn>
            <q-btn
            round
            unelevated
            
            class=" tw-top-0 tw-bg-white tw-right-0 border-inset "
            @click="toggleFavorite"
            size="9px"
          >
            <q-icon
              
              :name="isFavorite ? 'favorite' : 'favorite_border'"
              :class="[isFavorite ? 'tw-text-info' : 'tw-text-border-icon']" />
            
          </q-btn>
      </div>
      <div
        :style="
        `background-image: url(http://flowers.2apps.ru${card.img});`"
        class="image-pos "
      >
      </div>
    </div>
    <BorderLine class="-m-content tw-mt-4"/>
    <div  class="tw-pt-4">
      <template v-if="card.text">
        <div class="tw-mb-5 tw-font-semibold tw-text-xl">
          <span class="">Описание</span>
        </div>
        <div class="tw-mb-4 tw-text-xl">
          <p >{{card.text}}</p>
          
        </div>
        <BorderLine class="-m-content tw-mt-12 tw-mb-6"/>
      </template>
      <div>

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
              <div
                @click="choicePackage(1)"
                class="el-slide tw-flex tw-flex-col">

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
              <div
                @click="choicePackage(2)"
                class="el-slide tw-flex tw-flex-col">
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
              <div
                @click="choicePackage(3)"
                class="el-slide tw-flex tw-flex-col">
                
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
              <div
                @click="choicePackage(4)"
                class="el-slide tw-flex tw-flex-col">
                
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
          <p class="tw-text-sm">
            Параметры упаковки (цвет и т.д.) укажите в комментарии к заказу
          </p>
        </div>
        <BorderLine class="-m-content tw-mt-6"/>
      </template>

    </div>    

    <div class="tw-flex tw-justify-between tw-items-center tw-pt-2.5 tw-pb-5">
      <span class="tw-text-3xl sm:tw-text-2xl tw-font-bold">{{card.price}}&nbsp;руб.</span>
      <button
      @click="addProductToCart"
      class="tw-bg-secondary tw-rounded-full tw-text-white "
      type="buttom"
      style="padding: 9.5px 32px; line-height: 24.5px; font-size: 20px"
      >В корзину</button>
      
      
    </div>
    
  </q-page>
</template>

<script>
import { Hooper, Slide } from 'hooper';

import Slider from 'components/Slider'
import {mapGetters} from 'vuex'

import {QSpinnerPuff} from 'quasar'


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
      max: 101,
      count: 1,
      slide: 1,
      hooperSettings: {
        transition: 700,
        itemsToShow: 4
      },
    
      isActive: false,
      name:"favorite_border",
      claaName: "tw-text-border-icon",
      
      package: 0
    }
  },
  methods:{
    async getCard(){
      await this.$store.dispatch('cards/getCard', this.$route.params.id)
    },
    toggleFavorite(){
      if (this.favorite && this.favorite[this.card.id]) {
        this.isActive = false
        this.$store.dispatch('cards/removeFavoriteItem', this.card);
      } else {
        this.isActive = true
        this.$store.dispatch('cards/addFavoriteItem', this.card);
      }
    },
    choicePackage(i){
      this.package = i;
      console.log(this.package)
    },

    
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
      this.$store.dispatch("basket/addProductToCart", {...this.card, count:this.count, id: `${this.card.id}_${this.package}`});
      this.$q.notify({
        position: 'bottom',
        attrs: {'class': 'raul'},
        actions: [
            
          {label:`Добавлено в корзину ${this.count} штук${this.count===1? 'a' : this.count>1 && this.count<=4 ? 'и' : ''  }`, attrs: {'style': 'color: white; font-size: 12px; margin: 0 auto; padding-bottom:10px'}},
          {label:'оформить заказ', attrs: { 'style': "margin: 0 auto: border-radius: 50%; background-color: #CE406A; color: white; width: 100%" }, handler:()=>{this.$router.push({name: 'basket'})} }],
        timeout: 200000
      })
    },
    getBackPage(){
      this.$router.go(-1)
      // this.$router.push({name: 'cards', params: {categories: this.card.categories}})
    },
    getNullLabel (val) {
      return val === null ? 'null' : val
    },


  },
  computed: {
    ...mapGetters("cards", ["card", "favorite"]),

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
  created(){
    this.$q.loading.show(
      {
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      }
    ) 
    return this.getCard().then(()=>{
      this.$q.loading.hide()
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
