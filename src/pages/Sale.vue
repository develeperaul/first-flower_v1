<template>
  <q-page v-if="sales" class="p-content">
    
    <SaleButton :sales="sales" />
    
  </q-page>
  <ZeroComp
    v-else
    text="В избранном пока ничего нет"
    textBtn="Перейти в каталог" />
</template>

<script>
import { mapGetters } from "vuex";
import SaleButton from "components/SaleButton";
import ZeroComp from 'components/ZeroComp'
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
    ZeroComp
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
