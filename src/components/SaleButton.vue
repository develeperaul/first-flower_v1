<template>
  <div>
    <!-- <BaseSale/> -->
    <div
      v-for="sale in sales"
      :key="sale['id']"
      
    >
      
      <BaseSale v-bind="{ ...sale }" class="tw-mb-5">
        <router-link
            :to="{name: 'salecard', params: { id: sale.id, sale }}">
        <q-btn size="10px" round color="white" unelevated @click="getSale"  >
          <q-icon   color="dark" name="arrow_forward">
          </q-icon>
        </q-btn>
        </router-link>
      </BaseSale>
      
    </div>

  </div>
</template>

<script>
export default {
  props: {
    sales: {
      default: "Акций на данный момент нет",
      type: Array || String,
      required: false
    }
  },
  // name: 'ComponentName',
  data () {
    return {}
  },
  
}
</script>
