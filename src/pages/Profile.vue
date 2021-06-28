<template>
  <q-page v-if="user" class="tw-flex tw-flex-col "> 
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
  </q-page>
  <q-page v-else>
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-3xl tw-font-semibold">Мой профиль</span>
      <span class="tw-text-info-darken tw-text-xl tw-mb-12">Введите ваш номер телефона</span>
      <span class="tw-text-2xl text-black tw-flex tw-flex-nowrap tw-mb-12" >+7 (<input type="text" ></span>

      <BaseButton class="tw-w-full" text="Далее"/>
      
      
    </div>
  </q-page>
  <!-- <q-page v-else>
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-12">
      <span class="tw-text-3xl tw-font-semibold">Код подтверждения</span>
      <Confirm 
      class="tw-mb-8"
          :fields="4"
          
          vid="verification_code"/>
      <span class="tw-mb-9 tw-text-accent-light">
        На номер +7 (999) 999 99 99 отправлен код подтверждения. Введите его в поле выше
      </span>
      
    </div>
    <div class="tw-flex tw-justify-between tw-bg-primary tw-p-5">
        <span class="tw-text-primary-darken tw-font-medium">
          Отправить код повторно
        </span>
        <span class="tw-text-primary-darken05 tw-font-medium">42 сек</span>
      </div>
  </q-page> -->
</template>

<script>
import Confirm from 'src/components/Confirm.vue';
export default {
  components: { Confirm },
  data(){
    return {
      user: null
    }
  }
  // name: 'PageName',
};
</script>
