<template>
  <q-page class="p-content">
    <!-- content -->
    <!-- <template v-if="isLoading">
      {{isLoading}}
    </template> -->
    <template >
    <div class="tw-text-center tw-mb-5 tw-relative">
      <q-icon
      @click="getSalesPage"
      name="arrow_back_ios"
      class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 "
      >
      </q-icon>
      <span 
          class="tw-text-xl tw-font-semibold "  
      >
        {{sale.name}}
      </span>
    </div>
    <BaseSale v-bind="{ ...sale }" />
    <div class="tw-mx-4 tw-mt-7">
      <span
        class="tw-text-lg tw-font-medium ">
        {{sale.preview_text}}
      </span>
    </div>
    </template>
    
    
  </q-page>
</template>

<script>

import  {mapGetters} from 'vuex'

import {QSpinnerPuff} from 'quasar'


export default {
  name: 'SaleCard',
  data(){
    return {
      
    }
  },
  
  
  methods:{
    getSalesPage(){
      console.log("getSalesPage")
      this.$router.go(-1)
    },
    async getSaleItem(){
      await this.$store.dispatch("sales/actionSaleItem", this.$route.params.id);
    }
  },
  computed:{
    ...mapGetters(
      "sales", ["sale"],
    ),
    
  },
  created(){
    this.$q.loading.show(
      {
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      }
    ) 
    return this.getSaleItem().then(()=>{
      this.$q.loading.hide()  
    })
  },
  
}
/*
  при обновлении компонент не видит 
*/
</script>

