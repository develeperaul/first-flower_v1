<template>
  <q-page class="p-content">
    <div>
      <span class="tw-font-semibold tw-text-xl">Букет недели</span>
      <div class="tw-grid tw-grid-cols-3">
          <!-- <div class="tw-bg-center tw-bg-contain tw-bg-no-repeat"
          style="background-image: url(/flower.jpg); height: 105px; max-width: 105px " 
          ></div>-->
          <img 
            width="123"
            height="123"
            class="tw-flex-shrink-0"  src="/flower.jpg" alt="" style="border-radius: 5px " > 
          <div class="tw-col-span-2 tw-flex tw-flex-col tw-justify-between tw-ml-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
              <span class="tw-text-lg tw-font-medium">
                Букет из 21 розы по сниженной цене
              </span>
              
            </div> 
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
                <span class="tw-text-xl tw-font-semibold">2390 руб.</span>

                <span class="tw-text-xl tw-font-semibold tw-text-info-light">2790 руб.</span>
            </div> 
          </div>
          
      </div>
    </div>  
    <div>
      <span class="tw-font-semibold tw-text-xl ">Акция недели</span>
        <BaseSale v-bind="{ ...sale }" class="tw-mb-5 tw-mt-3">
          <router-link
              :to="{name: 'salecard', params: { id: sale.id, sale }}">
          <q-btn class="" round color="white" unelevated >
            <q-icon color="dark" name="arrow_forward">
    

          
            </q-icon>
          </q-btn>
          </router-link>
        </BaseSale>
    </div>
    <div>
      <span class="tw-font-semibold tw-text-xl">Новинки</span>
      <div>
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
              <q-carousel-slide name="style" class="tw-p-0 tw-w-10 " ref="slide" img-src="../assets/image.png">
                
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="tw-p-0" img-src="../assets/image.png">
                
              </q-carousel-slide>
              <q-carousel-slide name="map" class="tw-p-0" img-src="../assets/flower.jpg">
              
              </q-carousel-slide>
              
            </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import SaleButton from "components/SaleButton";

export default {
  // name: 'PageName',
  components: {
    SaleButton
  },
  data(){
    return{
      slide: 'style'
    }
  },
  computed: {
    ...mapGetters("sales", ["sale"]),
    
  },
  
  created(){
    this.$store.dispatch("sales/getSaleCard", 1);
    
  },
};
</script>
