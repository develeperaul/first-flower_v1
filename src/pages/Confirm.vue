<template>
  <q-page class="p-content">

    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-3xl tw-text-center tw-font-semibold tw-mb-7">Код подтверждения</span>
      <ConfirmInput
        class="tw-mb-8"
        :fields="4"
        :failed="failed"
        vid="verification_code"
        :valueCod.sync="innerValue"
      />
      <span v-if="failed" class="tw-mb-9 tw-text-secondary tw-text-center">
        Введён не правильный код!
      </span>
      <span class="tw-mb-9 tw-text-accent-light tw-text-center">
        На номер {{`+7 ${phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2 $3 $4")}`}} отправлен код подтверждения. Введите его в поле выше
      </span>
    </div>
    <div
      class="tw-flex tw-justify-between tw-bg-primary tw-p-5"
      @click="resend"
    >
      <span class="tw-text-primary-darken tw-font-medium">
        Отправить код повторно
      </span>
      <span
        v-if="currentTime!==0"
        class="tw-text-primary-darken05 tw-font-medium"
      >{{currentTime}}&nbsp;сек</span>
      <span
        v-else
        class="tw-text-primary-darken05 tw-font-medium"
      >ОК</span>

    </div>
  </q-page>
</template>

<script>
import ConfirmInput from 'components/ConfirmInput';
import { mapGetters } from 'vuex';
export default {
  components: {
    ConfirmInput
  },
  data () {
    return {
      currentTime: 60,
      timer: null,
      innerValue: '',
      phone: '',
      failed: false
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    resend () {
      if (this.currentTime == 0) {
        this.$store.dispatch('profile/getSms', `+7${this.phone}`);
        this.currentTime = 60;
        this.startTimer();
      }
    },
    startTimer () {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer () {
      clearTimeout(this.timer)
    },
  },
  computed: {
    ...mapGetters("profile", ["code"])
  },
  created () {
    if (this.$route.params.phone) this.phone = this.$route.params.phone
    else this.$router.push({ name: 'signin' })

  },
  watch: {
    currentTime (time) {
      if (time === 0) {
        this.stopTimer()
      }
    },
    innerValue (val) {
      
      if (val.length === 4) {
        this.$store.dispatch('profile/getToken', {phone:`7${this.phone}`, kod: val}).then(response=>{
          
          if(response.token ){
             this.failed = false
             this.$router.push({ name: 'user', params: { id: this.phone } })
             console.log(this.failed)  
          } else if(response.length === 0){
            this.failed = true
          } 
        })
      } else if (val.length < 4 ){
        this.failed = false
      }
    }
  },
  // name: 'PageName',
}
</script>
