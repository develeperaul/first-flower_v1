<template>
  <q-page class="p-content">
    <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

import BaseList from "components/BaseList.vue";
// class="tw-flex tw-flex-center "
export default {
  name: "PageIndex",
  components: {
    BaseList
  },
  created() {
    this.$store.dispatch("cards/list");
  },
  computed: {
    ...mapGetters("cards", ["cards"])
  }
};
</script>
<style scoped lang="scss"></style>
