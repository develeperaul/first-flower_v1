<template>
  <q-page padding>
    <BaseSale :sales="sales" />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import BaseSale from "components/BaseSale";

export default {
  name: "Sale",
  components: {
    BaseSale,
  },
  created() {
    this.$store.dispatch("sales/list");
  },
  computed: {
    ...mapGetters("sales", ["sales"]),
  },
};
</script>
