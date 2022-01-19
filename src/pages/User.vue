<template>
  <div>
    <div class="p-content tw-flex tw-flex-col">
      <h2 class="title tw-self-center">Профиль</h2>
      <ValidationObserver v-slot="{ passes }">
      <form class="tw-flex tw-flex-col"
        @submit.prevent="passes(onSubmit)"
      >

          <Input
            rules="required"
            label="Имя"
            placeholder="Иван"
            v-model="firstName"
          />
          <Input
            rules="required"
            label="Фамилия"
            placeholder="Иванов"
            v-model="lastName"
          />
          <div class="tw-mb-3" v-if="phone || phone == ''">

            <span>Телефон</span>
            <span>
              {{ getPhone }}
            </span> 
          </div>
      
        <!-- <input type="text" v-model="firstName" placeholder="Имя" class="input" />
        <input type="text" v-model="lastName" placeholder="Фамилия" class="input" /> -->
        <!-- <input type="text" v-model="phoneNumber" placeholder="Телефон" class="input" /> -->

        <button
          class="tw-bg-secondary tw-rounded-full tw-text-white "
          type="submit"
          style="padding: 9.5px 32px; line-height: 24.5px; font-size: 20px; margin-bottom: 24px"
        >Изменить 
        </button>

      </form>
      </ValidationObserver>
      <!-- <q-input v-model="name" label="Standard" class="input"/> -->
      <!-- <span>Телефон</span>
      <span>
        {{ getPhone }}
      </span> -->
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
      style="justify-content: flex-start; margin-top: 16px"
    >
      <h2 class="title">Поддержка</h2>
      <div class="soc tw-flex tw-justify-around tw-w-full tw-px-6">
        <a
          @click.prevent="goWhatsapp"
          class="tw-flex tw-flex-col tw-items-center"
        >
          <q-img
            src="whatsapp.svg"
            width="50px"
            height="50px"
            class="tw-rounded-md tw-flex-shrink-0"
          />
          <span> WhatsApp </span>
        </a>

        <div @click="goVk" class="tw-flex tw-flex-col tw-items-center">
          <q-img
            src="vk.svg"
            width="50px"
            height="50px"
            class="tw-rounded-md tw-flex-shrink-0"
          />
          <span> ВКонтакте </span>
        </div>
      </div>
    </ZeroComp>
  </div>
</template>

<script>
import ZeroComp from 'components/ZeroComp';
import { mapGetters } from 'vuex';
import { token } from 'src/api/profile';
export default {
  components: {
    ZeroComp,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      cellphoneMasked: '',
      cellphone: ''
    };
  },
  methods: {
    onSubmit(){
      this.$store.dispatch('profile/updateClientData', {name: this.firstName, last_name: this.lastName, token: JSON.parse(localStorage.getItem("accessToken")).token})
      
    },
    goVk() {
      cordova.InAppBrowser.open(
        'https://vk.com/firstflowershop',
        '_system',
        'location=yes'
      );
    },
    goWhatsapp() {
      cordova.InAppBrowser.open(
        'https://wa.me/79178000907',
        '_system',
        'location=yes'
      );
    },

    outProfile() {
      localStorage.removeItem('accessToken');
      this.$store.commit('profile/getPhone', null);
      this.$router.push({ name: 'signin' });
    },
  },
  computed: {
    ...mapGetters('profile', ['phone' , 'last_name', 'name']),
    getPhone() {
      if (this.phone === null) {
        return this.phone;
      } else {
        return `${this.phone.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          '+$1 ($2) $3 $4 $5'
        )}`;
      }
    },
  },
  created() {
    // if (localStorage.getItem('name')) {
    //   this.name = JSON.parse(localStorage.getItem('name'));
    // }
  },
  mounted(){
      
    this.lastName = this.last_name
    if(this.last_name)this.lastName=this.last_name;
    if(this.name)this.firstName=this.name;

  },
  beforeMount(){
    this.$nextTick().then(()=>{

      console.log(this.last_name)
    })
  },
  watch: {
    // name(val) {
    //   localStorage.setItem('name', JSON.stringify(val));

    //   console.log(val);
    // },
  },
  // name: 'PageName',
};
</script>

<style lang="scss" scoped>
.input {
  border-bottom: 1px solid black;
  margin-bottom: 16px;
}

.soc {
  margin-bottom: 40px;
}
</style>
