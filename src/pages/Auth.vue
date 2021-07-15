<template>
  <q-page  class="p-content">
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
        
      
      
      <BaseButton v-if="filled" class="tw-w-full" text="Далее" :to="{name: 'confirm', params: {phone: this.phone}}"/>
      
      
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data(){
    return {
      phone:''
    }
  },
    methods: {
    onSubmit(){
      console.log('submit')
    }
  },
  computed: {
      filled(){
      if(this.phone.length === 10) return true
      return false
    } 
  }
}
</script>
