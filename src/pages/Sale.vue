<template>
  <q-page class="p-content">
    
    <SaleButton :sales="sales" />
    
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import SaleButton from "components/SaleButton";

import {QSpinnerPuff} from 'quasar'

export default {
  name: "Sale",
  
  methods:{
    async getSaleList(){
      await this.$store.dispatch("sales/actionSaleList");
    }
  },
  components: {
    SaleButton,
  },
  created() {
    if(!this.sales){
      this.$q.loading.show(
      {
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      }
      )  
      return this.getSaleList().then(()=>{
        this.$q.loading.hide()  
      })
    }
    
    
  },
  computed: {
    ...mapGetters("sales", ["sales"]),
  },
  
  
  
};
</script>
