<template>
  <ZeroComp
    v-if="favorite.length === 0"
    text="В избранном пока ничего нет"
    textBtn="Перейти в каталог" />
  <q-page  v-else class="p-content">

    <BaseList :cards="favorite " class="tw-grid tw-grid-cols-2 tw-gap-4"/>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import ZeroComp from 'components/ZeroComp'
import BaseList from "components/BaseList.vue";
// class="tw-flex tw-flex-center "
export default {
  name: "PageIndex",
  components: {
    BaseList,
    ZeroComp,
  },
  created() {
    // this.$store.dispatch("cards/list");
  },
  computed: {
    ...mapGetters("auth", ["favorite"])
  }
};
</script>
<style scoped lang="scss"></style>
