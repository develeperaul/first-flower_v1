<template>
  <q-page class="p-content">

    <template v-if="sale">
      <div class="tw-text-center tw-mb-5 tw-relative">
        <q-icon
          @click="getSalesPage"
          name="arrow_back_ios"
          class="tw-absolute tw-left-0 tw-top-1/2 tw-transform tw--translate-y-1/2 "
        >
        </q-icon>
        <span class="tw-text-xl tw-font-semibold ">
          {{sale.name}}
        </span>
      </div>
      <q-img
        v-if="sale.img_det"
        :src="`http://flowers.2apps.ru${sale.img_det}`"
        width="100%"
        height="100%"
        style="border-radius: 5px"
        spinner-color="grey"
        spinner-size="50px"
      />
      <div class="tw-mx-4 tw-mt-7">
        <span class="tw-text-lg tw-font-medium ">
          {{sale.detail_text}}
        </span>
      </div>
    </template>

  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'

import { QSpinnerPuff } from 'quasar'


export default {
  name: 'SaleCard',
  data () {
    return {

    }
  },


  methods: {
    getSalesPage () {

      this.$router.go(-1)
    },
    async getSaleItem () {
      await this.$store.dispatch("sales/actionSaleItem", this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters(
      "sales", ["sale"],
    ),

  },
  created () {
    this.$q.loading.show(
      {
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      }
    )
    return this.getSaleItem().then(() => {
      this.$q.loading.hide()
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit("sales/clear")
    next()
  }

}
/*
  при обновлении компонент не видит
*/
</script>

