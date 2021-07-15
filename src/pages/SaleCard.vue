<template>
  <q-page padding>
    <!-- content -->
    <!-- <template v-if="isLoading">
      {{isLoading}}
    </template> -->
    <template >
    <div class="tw-text-center tw-mb-5">
      <span @click="getSalesPage"
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
    
    return this.getSaleItem()
  },
  
}
/*
  при обновлении компонент не видит 
*/
</script>

