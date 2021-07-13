<template>
  <q-page padding>
    <!-- content -->
    <template v-if="isLoading">
      {{isLoading}}
    </template>
    <template v-else>
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
        {{sale.text}}
      </span>
    </div>
    </template>
    
    
  </q-page>
</template>

<script>
import  {mapState} from 'vuex'
export default {
  // name: 'PageName',
  data(){
    return {
      
    }
  },
  methods:{
    getSalesPage(){
      console.log("getSalesPage")
      this.$router.go(-1)
    }
  },
  computed:{
    ...mapState({
      isLoading: state => state.sales.isLoading,
      sale: state => state.sales.sale
    }),
    
  },
  created(){
    this.$store.dispatch("sales/getSaleCard", this.$route.params.id);
    
  },
  
}
/*
  при обновлении компонент не видит 
*/
</script>

