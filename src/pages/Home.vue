<template>
  <q-page class="p-content">
    <div v-if="weekItem">
      <span class="tw-font-semibold tw-text-xl ">Букет недели</span>
      <div class="tw-flex  tw-mt-4">
          <q-img 
            @click="linkCard(weekItem.id)"
            v-if="weekItem.img"
            width="123px"
            height="123px"
             :src="`https://flowers.2apps.ru${weekItem.img}`" alt="" style="border-radius: 5px; min-width:123px "
             /> 
          <div class=" tw-flex tw-flex-col   tw-ml-4">
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap">
              

              <span class="tw-text-lg sm:tw-text-base tw-font-medium tw-pb-3">
                {{weekItem.name}}
              </span>
              
            </div> 
            <div class="tw-flex tw-justify-between tw-items-center tw-flex-nowrap ">
                <span class="tw-text-xl sm:tw-text-sm tw-font-semibold sm:tw-mr-4  tw-mr-11">{{weekItem.price}}&nbsp;руб.</span>
                <div>
                  <span style="color:red;text-decoration:line-through;">
                    <span class="tw-text-xl sm:tw-text-sm tw-font-semibold tw-text-info-light">{{weekItem.oldprice}}&nbsp;руб.</span>
                  </span>
                </div>
                
            </div> 
          </div>
          
      </div>
    </div>  
    <div class=" tw-mt-8" v-if="saleItem">
      <span class="tw-font-semibold tw-text-xl ">Акция недели</span>
        <BaseSale v-bind="{ ...saleItem }" class="tw-mb-5 tw-mt-3">
          <router-link
          v-if="saleItem.id"
              :to="{name: 'salecard', params: { id: saleItem.id, saleItem }}">
          <q-btn size="10px" round color="white" unelevated >
            <q-icon color="dark" name="arrow_forward">
            </q-icon>
          </q-btn>
          </router-link>
        </BaseSale>
    </div>
    <div v-if="newList.length>0">
      <span class="tw-font-semibold tw-text-xl ">Новинки</span>
      <!-- <div class="tw-grid  new-products">
        <div
              class="new-product"
              v-for="(item, index) in firstList"
              :key="index"
              >
                  <div class=" tw-flex tw-flex-col" @click="linkCard(item.id)">
                    <div>
                      <q-img
                        :src="`https://flowers.2apps.ru${item.img}`"
                        class="tw-rounded-md tw-mb-4"
                        width="123px"
                        height="123px"
                        style="min-width: 123px; min-height: 123px"
                      />
                    </div>
                    <span class="tw-text-lg tw-font-medium tw-text-left tw-mb-2.5" >{{item.name}}</span>
                    
                </div>
            </div>
      </div> -->

      
          <Hooper
            :settings="hooperSettings"
            v-for="(row,index) in hooperRows" :key="index"
            class="tw-flex tw-justify-between"
            >
            <Slide
              
              v-for="(item, index) in row"
              :key="index"
              >
                  <div class=" tw-flex tw-flex-col" @click="linkCard(item.id)">
                    <div>
                      <q-img
                        :src="`https://flowers.2apps.ru${item.img}`"
                        class="tw-rounded-md tw-mb-4"
                        width="123px"
                        height="123px"
                        style="min-width: 123px; min-height: 123px"
                      />
                    </div>
                    <span class="tw-text-lg tw-font-medium tw-text-left tw-mb-2.5" >{{item.name}}</span>
                    
                </div>
            </Slide>
            
          </Hooper> 

          <!-- <Hooper
            :settings="hooperSettings"
            v-if="lastList"
            >
            <Slide
              
              v-for="(item, index) in lastList"
              :key="index"
              >
                  <div class=" tw-flex tw-flex-col" @click="linkCard(item.id)">
                    <div>
                      <q-img
                        :src="`https://flowers.2apps.ru${item.img}`"
                        class="tw-rounded-md tw-mb-4"
                        width="123px"
                        height="123px"
                        style="min-width: 123px; min-height: 123px"
                      />
                    </div>
                    <span class="tw-text-lg tw-font-medium tw-text-left tw-mb-2.5" >{{item.name}}</span>
                    
                </div>
            </Slide>
            
          </Hooper>
           -->
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
        transition: 700,
        // autoPlay: true,
        // playSpeed: 3500,
        itemsToShow: 4,
        
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
    hooperRows(){
      const arr = this.newList
      const cols = Math.round(window.innerWidth/140) < 3 ? 3 : Math.round(window.innerWidth/140)
      let arr2 = [];
      for (let i = 0; i < arr.length; i += cols) {
        arr2.push(arr.slice(i, cols+i))
      }
      // console.log(Math.round(windoыw.innerWidth/123));
      return arr2
    },
  },
};
</script>
<style lang="scss" scoped>

    .hooper-slide{
    min-width: 123px;
    max-width: 123px;
    
    &:not(:last-child){
      margin-right: 17px;

    }
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
    .new{
      &-products {
        
        grid-template-columns: repeat(4, minmax(123px, 1fr));
        column-gap: 17px;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          width: 0;
        }
      }
      &-product {
        width: 123px;
        &:not(:last-child){
          
        }
      }
    }
</style>
