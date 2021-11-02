<template>
<div>
  <ValidationObserver v-slot="{ passes }">
  <form @submit.prevent="passes(onSubmit)"
    class="tw-flex tw-flex-col tw-justify-between"
  >
    <div class="tw-flex tw-flex-col tw-justify-between">
      <span class="tw-text-2xl tw-font-semibold tw-mb-3.5 tw-mt-7">
        Способ доставки
      </span>
      <div class="tw-flex tw-items-center tw-mb-4">
        <input type="radio" id="pickup" value="pickup" v-model="picked">
        <label  for="pickup">Самовывоз</label>  
      </div>
      <div class="tw-flex tw-items-center tw-mb-4">
        <input type="radio" id="delivery" value="delivery" v-model="picked">
        <label  for="delivery">Доставка</label>
      </div>
      <div >
        <span v-if="picked === 'pickup'">
          Адрес магазина: Чишмы, пр. Дружбы, 1/1 
        </span>
        <Input v-if="picked === 'delivery'" rules="required" label="Адрес" placeholder="Павел"/>
      </div>
      
    </div>
    <div class="tw-flex tw-flex-col tw-justify-between">
      <span class="tw-text-2xl tw-font-semibold tw-mb-3.5 tw-mt-7">
        Данные получателя
      </span>
      <Input rules="required" label="Имя" placeholder="Павел"/>
      <PhoneInput v-model="cellphoneMasked" :raw.sync="cellphone"/>
      <Input rules="required" type="tel" label="Телефон" placeholder="8 (9__) ___-__-__" v-mask="'8 (###) ### ## ##'"/>
      <Input rules="required" label="Комментарий" placeholder="Павел"/>
    </div>
    <div class="tw-flex tw-flex-col tw-justify-between">
      <span class="tw-text-2xl tw-font-semibold tw-my-3.5">
        Условия самовывоза 
      </span>
      <Input rules="required" label="Дата" placeholder="Павел"/>
      <Input rules="required" label="Время" placeholder="Павел"/>
      <Input rules="required" label="Комментарий к заказу" placeholder="Павел"/>
    </div>
    
      
      <div class="tw-flex tw-flex-col tw-justify-between">
      <span class="tw-text-2xl tw-font-semibold tw-mb-3.5 tw-mt-7">
          Способ оплаты
      </span>
      <div class="tw-flex tw-items-center tw-mb-4">
        <input type="radio" id="card" value="card" v-model="money">
        <label  for="card">Картой онлайн</label>  
      </div>
      <div class="tw-flex tw-items-center tw-mb-4">
        <input type="radio" id="cash" value="cash" v-model="money">
        <label  for="cash">Наличными</label>
      </div>
      
      
    
    </div>
    <!-- <button class="btn text-brand-gray mt-10">Оформить заказ</button> -->
    <!-- <q-btn
      
      class="py-3"
      unelevated
      rounded="rounded"
      color="info"
      
      no-caps
      >В корзину
    </q-btn> -->
    <BaseButton type="submit" class="tw-text-xl tw-mb-12 tw-mt-4" text="Оформить заказ" :to="{name: 'confirmdelivery'}"/>
  </form>
  </ValidationObserver>
  

</div>
  
</template>

<script>
import { VueMaskDirective } from 'v-mask';

export default {
  // name: 'ComponentName',
  

  data () {
    return {
      cellphoneMasked: '',
      cellphone: '',

      show: true,
      inputValue: '',
      focusCount: 0,
      picked: 'pickup',
      money: 'card',
      myInputModel: '',

    }
  },
  directives: {
    mask: VueMaskDirective,
  },
  
  methods:{
    
    onSubmit() {
      alert("Form Submitted!");
    }
  },
  
  
}
</script>
<style scoped >

.btn {
  border: 1px solid currentColor;
  border-radius: 999999px;
  padding: 0.75rem 3rem;
  text-align: center;
  background: transparent;
  cursor: pointer;
  border-color: currentColor;
  width: fit-content;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;
}

input[type="radio"]:checked, 
input[type="radio"]:not(:checked) 
{
    position: absolute;
    left: -9999px;
}

input[type="radio"]:checked + label, 
input[type="radio"]:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    line-height: 20px;
    cursor: pointer;
}

input[type="radio"]:checked + label:before, 
input[type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
}

input[type="radio"]:checked + label:before, 
input[type="radio"]:not(:checked) + label:before {
    border-radius: 100%;
}

input[type="radio"]:checked + label:after, 
input[type="radio"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

input[type="radio"]:checked + label:after, 
input[type="radio"]:not(:checked) + label:after {
    left: 3.2px;
    top: 50%;
    transform: translate(0%, -50%);
    width: 13.6px;
    height: 13.6px;
    border-radius: 100%;
    background-color: #e145a3;
}
 
input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
}

input[type="radio"]:checked + label:after {
    opacity: 1;
}
</style>