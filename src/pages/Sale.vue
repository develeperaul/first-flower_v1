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
  
  components: {
    SaleButton,
  },
  created() {
    this.$store.dispatch("sales/list");
  },
  computed: {
    ...mapGetters("sales", ["sales"]),
  },
};
</script>
