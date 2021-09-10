<template>
  <div>
    <div class="p-content tw-flex tw-flex-col">
      <span>
        {{getPhone}}
      </span>
      <span
        class="tw-font-semibold tw-text-secondary tw-mt-4"
        @click="outProfile"
      >
        выйти
      </span>
    </div>
    <ZeroComp
      
      textBtn="Перейти в каталог"
    />
  </div>

</template>

<script>
import ZeroComp from 'components/ZeroComp'
import { mapGetters } from 'vuex';
export default {
  components: {
    ZeroComp
  },
  methods: {
    outProfile () {
      
      localStorage.removeItem("accessToken")
      this.$store.commit("profile/getPhone", null)
      this.$router.push({ name: 'signin' })
    }
  },
  computed: {
    ...mapGetters('profile', [
      "phone"
    ]),
    getPhone () {

      if (this.phone === null) {
        return this.phone
      } else {

        return `${this.phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3 $4 $5")}`
      }

    }
  }
  // name: 'PageName',
}
</script>
