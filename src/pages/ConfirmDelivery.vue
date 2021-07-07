<template>
  <q-page padding>
    <ZeroComp
      :hasImg="false"
      text="Спасибо! В скором времени наши менеджеры с Вами свяжутся"
      textBtn="Перейти в каталог"
      :to="{name: 'favorite'}" />
  </q-page>
</template>

<script>
import ZeroComp from 'components/ZeroComp.vue'
export default {
  components: {
    ZeroComp
  }
  // name: 'PageName',
}
</script>
