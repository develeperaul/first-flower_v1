<template>
  <q-page class="p-content">
    <div>
      <span class="tw-font-semibold tw-text-xl ">Букет недели</span>
      <div class="tw-grid tw-grid-cols-3 tw-mt-4                       ">
          <img 
            @click="linkCard(weekItem.id)"
            width="123"
            height="123"
            
            class="tw-flex-shrink-0"  src="/flower.jpg" alt="" style="border-radius: 5px " > 
          <div class="tw-col-span-2 tw-flex tw-flex-col   tw-ml-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
              

              <span class="tw-text-lg sm:tw-text-base tw-font-medium">
                {{weekItem.name}}
              </span>
              
            </div> 
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap ">
                <span class="tw-text-xl sm:tw-text-base tw-font-semibold">{{weekItem.price}}&nbsp;руб.</span>
                <div>
                  <span style="color:red;text-decoration:line-through;">
                    <span class="tw-text-xl sm:tw-text-base tw-font-semibold tw-text-info-light">{{weekItem.oldprice}}&nbsp;руб.</span>
                  </span>
                </div>
                
            </div> 
          </div>
          
      </div>
    </div>  
    <div class=" tw-mt-8">
      <span class="tw-font-semibold tw-text-xl ">Акция недели</span>
        <BaseSale v-bind="{ ...saleItem }" class="tw-mb-5 tw-mt-3">
          <router-link
              :to="{name: 'salecard', params: { id: saleItem.id, saleItem }}">
          <q-btn size="10px" round color="white" unelevated >
            <q-icon color="dark" name="arrow_forward">
            </q-icon>
          </q-btn>
          </router-link>
        </BaseSale>
    </div>
    <div>
      <span class="tw-font-semibold tw-text-xl ">Новинки</span>
      <div class="tw-mt-3.5">
          <Hooper
            :settings="hooperSettings"
            style="height: 145px">
            <Slide
              
              v-for="(item, index) in newList"
              :key="index"
              >
                  <div class=" tw-flex tw-flex-col" @click="linkCard(item.id)">
                    <div
                      :style="
                        `background-image: url(http://flowers.2apps.ru${item.img})`
                      "
                      class="image-pos tw-mb-4"
                    >
                      
                    </div>
                    <span class="tw-text-lg tw-font-medium tw-text-left tw-mb-2.5" >{{item.name}}</span>
                    
                </div>
            </Slide>
            
          </Hooper>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import { mapGetters } from "vuex";
import SaleButton from "components/SaleButton";

export default {
  // name: 'PageName',
  components: {
    SaleButton,
    Hooper,
    Slide
  },
  data(){
    return{
      

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
    async getHomeList(){
      await this.$store.dispatch("cards/actionHomeList")
    },

    linkCard(id){
      this.$router.push({name:'cardproduct', params: {id: id}})
    }
  },
  computed: {
    ...mapGetters("cards", ["weekItem", "saleItem", "newList"]),
    
  },
  
  created(){
    return this.getHomeList();
    
  },
};
</script>
<style lang="scss" scoped>
    .hooper-slide{
    min-width: 123px;
    height: 145px;
    
    
    margin-right: 12px;
    text-align: center;
    }
    .image-pos{
      border-radius: 5px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      min-height: 76px;
    }
</style>
