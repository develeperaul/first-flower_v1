<template>
  <q-page class="p-content">
    <ValidationObserver v-slot="{ passes }">

      <form
        @submit.prevent="passes(onSubmit)"
        class="tw-flex tw-flex-col tw-justify-between"
      >
        <div class="tw-flex tw-flex-col tw-justify-between">
          <span
            class="tw-text-2xl tw-font-semibold tw-mt-7"
            style="margin-bottom: 14px"
          >
            Способ доставки
          </span>
          <div class="tw-flex tw-items-center tw-mb-4">
            <input
              type="radio"
              id="pickup"
              value="pickup"
              v-model="picked"
            >
            <label for="pickup">Самовывоз</label>
          </div>
          <div class="tw-flex tw-items-center tw-mb-4">
            <input
              type="radio"
              id="delivery"
              value="delivery"
              v-model="picked"
            >
            <label for="delivery">Доставка</label>
          </div>
          <div>
            <span v-if="picked === 'pickup'">
              Адрес магазина: Чишмы, пр. Дружбы, 1/1
            </span>
            <!-- <Input
              v-if="picked === 'delivery'"
              v-model="adress"
              rules="required"
              label="Адрес"
              placeholder="Доставка"
            /> -->

            <Input
              v-if="picked === 'delivery'"
              v-model="city"
              label="Город или село"
              placeholder="Город или село"
            />

            <Input
              v-if="picked === 'delivery'"
              v-model="street"
              label="Улица"
              placeholder="Улица"
            />

            <Input
              v-if="picked === 'delivery'"
              v-model="home"
              label="Дом"
              placeholder="Номер дома"
            />
          </div>

        </div>
        <!-- <div class="tw-flex tw-flex-col tw-justify-between">
          <span
            class="tw-text-2xl tw-font-semibold tw-mt-7"
            style="margin-bottom: 14px"
          >
            Данные получателя
          </span>
          <Input
            rules="required"
            label="Имя"
            placeholder="Павел"
            v-model="name"
          />
          <PhoneInput
            v-model="cellphoneMasked"
            :raw.sync="cellphone"
          />
          <CommentInput :valuecomment.sync="commentDelivery" />

        </div>
        <div class="tw-flex tw-flex-col tw-justify-between">
          <span
            class="tw-text-2xl tw-font-semibold"
            style="margin: 14px 0"
          >
            Условия {{picked === 'pickup' ? 'самовывоза' : 'доставки'}}
          </span>
          <DateInput :valuedate.sync="date" />
          <TimeInput :valuetime.sync="time" />

          <CommentInput :valuecomment.sync="comment" placeholder="Комментарий к заказу" />

        </div>

        <div class="tw-flex tw-flex-col tw-justify-between">
          <span
            class="tw-text-2xl tw-font-semibold tw-mt-7"
            style="margin-bottom: 14px"
          >
            Способ оплаты
          </span>
          <div
            class="tw-flex tw-items-center tw-mb-4"
            v-if="picked === 'pickup'"
          >
            <input
              type="radio"
              id="card"
              value="card"
              v-model="money"
            >
            <label for="card">Картой в магазине</label>
          </div>
          <div class="tw-flex tw-items-center tw-mb-10">
            <input
              type="radio"
              id="cash"
              value="cash"
              v-model="money"
            >
            <label for="cash">Наличными</label>
          </div>

        </div> -->
        <button
          class="tw-bg-secondary tw-rounded-full tw-text-white "
          type="buttom"
          style="padding: 9.5px 32px; line-height: 24.5px; font-size: 20px; margin-bottom: 24px"
        >Оформить заказ
        </button>

      </form>
    </ValidationObserver>

  </q-page>
</template>

<script>
import ky from 'ky';
export default {
  // name: 'PageName',
  data () {
    return {
      city: '',
      street: '',
      home: '',

      adress: '',
      name: '',
      cellphoneMasked: '',
      cellphone: '',
      date: '',
      innerValue: '',
      time: '',
      comment: '',
      commentDelivery: '',
      money: 'card',
      picked: 'pickup'
    }
  },
  methods: {
    async onSubmit (e) {
      if (this.picked === 'delivery') {
        const res = await ky(`https://geocode-maps.yandex.ru/1.x/?apikey=7482946a-9120-4a56-96d9-f279288031bc&format=json&geocode=${this.city},улица+${this.street},дом+${this.home}&rspn=1&ll=55.3824710,54.5893840&spn=0.79,0.79&results=1`);
        console.log(res)
      }
      // this.$store.dispatch("basket/order", { delivery: this.adress === "" ? 'Самовывоз' : this.adress, name: this.name, phone: this.cellphone, comment_user: this.commentDelivery, date: this.date, time: this.time, comment: this.comment, payment: this.money })
      //   .then(() => {
      //     this.$store.dispatch("basket/clearBasket");
      //     this.$router.push({ name: 'confirmdelivery' })
      //   })
    }
  }
}
</script>
<style scoped>
input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
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
<style scoped lang="scss">
//  .Delivery{
//     input {
//     position: relative;
//     z-index: 99999;
//     padding-top: 1.4rem;

//     &.has-value,
//     &:focus {
//       outline: none;
//     }
//   }

//   label {
//     margin-top: 1rem;
//     user-select: none;
//   }

//     input.has-value ~ label,
//     input:focus ~ label {
//       font-size: 0.6rem;
//       margin-top: 0;
//       transition: all 0.2s ease-in-out;
//     }
//  }
</style>
