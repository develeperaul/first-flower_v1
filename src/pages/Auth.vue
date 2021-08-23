<template>
  <q-page class="p-content">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-5xl tw-font-semibold tw-pb-1">Вход</span>
      <span class="tw-text-info-darken tw-text-xl tw-mb-12">Введите ваш номер телефона</span>
      <ValidationObserver v-slot="{ passes }">

        <form @submit.prevent="passes(onSubmit)">
          <ValidationProvider
            :rules="{required:true, length:10}"
            mode="lazy"
            v-slot="{errors}"
          >
            <q-input
              borderless
              v-model="phone"
              mask="###) ### ## ##"
              unmasked-value
              autofocus
              type="tel"
              class="tw-text-4xl  text-black  tw-mb-12  "
              :input-style="{ width: '200px',marginLeft: '-12px', fontWeight: '400' }"
            >
              <template v-slot:prepend>
                <span class="tw-text-4xl tw-font-normal text-black">+7 (</span>
              </template>
            </q-input>

          </ValidationProvider>

          <BaseButton
            v-if="filled"
            class="tw-w-full"
            text="Далее"
            type="submit"
          />

        </form>
      </ValidationObserver>

    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('profile/getSms', this.phone)
      this.$router.push({ name: 'confirm', params: { phone: this.phone } })

    }
  },
  computed: {
    filled () {
      if (this.phone.length === 10) return true
      return false
    }
  },
  created () {

  }
}
</script>
