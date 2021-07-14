<template>
  <q-page class="p-content">
    
    <SaleButton :sales="sales" />
    
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import SaleButton from "components/SaleButton";

export default {
  name: "Sale",
  
  methods:{
    getSaleList(){
      this.$store.dispatch("sales/actionSaleList");
    }
  },
  components: {
    SaleButton,
  },
  created() {
    return this.getSaleList()
    
  },
  computed: {
    ...mapGetters("sales", ["sales"]),
  },
  
  
  
};
</script>
