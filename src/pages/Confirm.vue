<template>
  <q-page  class="p-content">
  
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-3xl tw-text-center tw-font-semibold tw-mb-7">Код подтверждения</span>
      <ConfirmInput 
      class="tw-mb-8"
          :fields="4"
          
          vid="verification_code"/>
      <span class="tw-mb-9 tw-text-accent-light">
        На номер {{phone}} отправлен код подтверждения. Введите его в поле выше
      </span>
      
    </div>,
    <div class="tw-flex tw-justify-between tw-bg-primary tw-p-5">
        <span class="tw-text-primary-darken tw-font-medium">
          Отправить код повторно
        </span>
        <span class="tw-text-primary-darken05 tw-font-medium">{{currentTime}}&nbsp;сек</span>
      </div>
  </q-page>
</template>

<script>
import ConfirmInput from 'components/ConfirmInput'
export default {
  components: {
    ConfirmInput
  },
  data() {
    return{
    currentTime: 10,
    timer: null,

    phone: ''
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    },
  },
  created(){
    this.phone = this.$route.params.phone
  },  
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
  // name: 'PageName',
}
</script>
