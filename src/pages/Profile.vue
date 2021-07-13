<template>
  <!-- <q-page v-if="user" class="tw-flex tw-flex-col p-content"> 
    <div class="tw-flex tw-flex-col tw-py-5">
      <span class="tw-text-2xl tw-font-semibold">
        Имя пользователя
      </span>
      <span class="tw-text-lg tw-text-info-darken ">
        +7 (999) 999 99 99
      </span>

      
    </div>
    <div class="tw-flex tw-justify-between tw-items-center tw-font-medium tw-py-5">
      <span> 
        Мои заказы
      </span>
      <Icon name="arrow_r"/>
      
    </div>
    <BorderLine class="tw--mx-3"/>
    <div class="tw-flex tw-justify-between tw-items-center tw-font-medium tw-py-5">
      <span> 
        Мои заказы
      </span>
      <Icon name="arrow_r"/>
    </div>
    <BorderLine class="tw--mx-3"/>
    <div class="tw-flex tw-justify-between tw-items-center tw-font-medium tw-py-5">
      <span> 
        Адреса доставки
      </span>
      <Icon name="arrow_r"/>
    </div>
    <BorderLine class="tw--mx-3"/>
    <div class="tw-flex tw-justify-between tw-items-center tw-font-medium tw-py-5">
      <span> 
        Контакты
      </span>
      <Icon name="arrow_r"/>
    </div>
    <BorderLine class="tw--mx-3"/>
    <div class="tw-flex tw-justify-between tw-items-center tw-font-medium tw-py-5"> 
      <span> 
        Редактировать профиль
      </span>
      <Icon name="arrow_r"/>
    </div>
    <BorderLine class="tw--mx-3"/>
        <div class="tw-flex tw-justify-between tw-items-center  tw-py-5 tw-font-semibold">
      <span> 
        Выйти
      </span>
      <Icon name="arrow_r"/>
    </div>
    <BorderLine class="tw--mx-3"/>
  </q-page> -->
  <!-- <q-page v-else class="p-content">
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-3xl tw-font-semibold">Мой профиль</span>
      <span class="tw-text-info-darken tw-text-xl tw-mb-12">Введите ваш номер телефона</span>
      <ValidationObserver tag="div"  >

      <form @submit.prevent="onSubmit">
        <ValidationProvider :rules="{required:true, length:10}"  mode="lazy" v-slot="{errors}">
        <q-input
          borderless
          v-model="phone"
          mask="###) ### ## ##"
          unmasked-value
          
          class="tw-text-2xl  text-black  tw-mb-12  "
          :input-style="{ width: '175px',marginLeft: '-12px', fontWeight: '400' }">
          <template v-slot:prepend >
            <span class="tw-text-2xl tw-font-normal text-black">+7 (</span>
          </template>
          </q-input>
          {{errors[0]}}
          
        </ValidationProvider>
        
        
      </form>
      </ValidationObserver>
        
      
      
      <BaseButton v-if="filled" class="tw-w-full" text="Далее"/>
      
      
    </div>
  </q-page> -->
  
  <!-- <div v-if="user">
    Профиль
  </div>
  <div v-else>
    //   // this.$router.push({name: 'cards', params: {categories: list.name}})
    <ZeroComp text="Войдите, чтобы увидеть профиль" textBtn="Войти" :to="{name: 'home'}"/>
  </div> -->
  <div>
    <!-- <template v-if="user">
     <Profile/> -->
    <!-- </template>
    <template v-else>
      <ZeroComp text="Войдите, чтобы увидеть профиль" textBtn="Войти" :to="{name: 'auth'}"/>
    </template> --> 
    <router-view></router-view>
  </div>
</template>

<script>

import ZeroComp from "components/ZeroComp";

import {mapGetters} from 'vuex';
export default {
  components: { 

    ZeroComp  
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters('auth', {
      user: 'getUser'
    } ),
    filled(){
      if(this.phone.length === 10) return true
      return false
    } 
  },

  created(){
    // if(this.$store.state.auth.currentUser === null){
    //     this.$router.push({name: 'signin'})
    // }
  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
      const profileUser = vm.$store.state.auth
      if( profileUser.currentUser === null){
        vm.$router.push({name: 'signin'})
      } else {
        vm.$router.push({name: 'user', params: { id: profileUser.id}})
      }
      
    })
  },
  

  // name: 'PageName',
};
</script>
