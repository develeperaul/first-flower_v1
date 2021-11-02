<template>
  <div>
    <div class="p-content tw-flex tw-flex-col">
      <h2 class="title tw-self-center">Профиль</h2>

      <input type="text" v-model="name" placeholder="ФИО" class="input">
      <!-- <q-input v-model="name" label="Standard" class="input"/> -->
      <span>Телефон</span>
      <span>
        {{getPhone}}
      </span>
      <!-- <span
        class="tw-font-semibold tw-text-secondary tw-mt-4"
        @click="outProfile"
      >
        выйти
      </span> -->
    </div>
    <ZeroComp
      textBtn="Перейти в каталог"
      class=""
      style="justify-content:flex-start; margin-top: 16px"
    >

    
    <h2 class="title">Поддержка</h2>
    <div class="soc tw-flex tw-justify-around tw-w-full tw-px-6">
      <a href="tel:+79178000907" class="tw-flex tw-flex-col tw-items-center">
        <q-img
          src="whatsapp.svg"
          width="50px"
          height="50px"
          class="tw-rounded-md tw-flex-shrink-0"
        />
        <span>
          WhatsApp
        </span>

      </a>
      
    <a href="https://vk.com/firstflowershop" class="tw-flex tw-flex-col tw-items-center">

      <q-img
        src="vk.svg"
        width="50px"
        height="50px"
        class="tw-rounded-md tw-flex-shrink-0"
      />
      <span>
        ВКонтакте
      </span>
    </a>
    </div>
    </ZeroComp>
  </div>

</template>

<script>
import ZeroComp from 'components/ZeroComp'
import { mapGetters } from 'vuex';
export default {
  components: {
    ZeroComp
  },
  data(){
    return {
      name: ''
    }
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
  },
  created(){
    if(localStorage.getItem('name')){
      this.name = JSON.parse(localStorage.getItem('name'))
    }
  },
  watch: {
    name(val){
        localStorage.setItem("name", JSON.stringify(val));

      console.log(val);
    }
  }
  // name: 'PageName',
}
</script>

<style lang="scss" scoped>
  .input {
    border-bottom: 1px solid black;
    margin-bottom: 16px;
  }

  .soc{
    margin-bottom: 40px;
  }
  
</style>