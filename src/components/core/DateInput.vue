<template>
  <Input
    rules="required"
    label="Дата"
    placeholder="дд.мм.ггг"
    v-model="innerValue"
    v-mask="'##.##.20##'"
    >
    <q-popup-proxy class="tw-absolute tw-right-4" breakpoint="0" ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <div class="styleW">
            <q-date
            v-model="innerValue"
            :navigation-min-year-month="minMonth"
            :options="options"
            mask="DD.MM.YYYY"
            minimal
            :locale="myLocale"></q-date>
          </div>
          
        </q-popup-proxy>
    <template>
      <Icon name="calendar" class="cursor-pointer tw-absolute tw-top-1/2 tw-transform tw--translate-y-1/2 tw-right-4" />
        
        
    </template>
  </Input>



</template>

<script>
import { VueMaskDirective } from 'v-mask';
import moment from 'moment'

export default {
  // name: 'ComponentName',
  props:{
    valuedate: {
      default: '',
      type: String,
    },
    
  },
  data () {
    return {
      // innerValue: moment().format("DD.MM.YYYY"),
      innerValue: '',


      minMonth: moment().format("YYYY/MM"),
      myLocale: {
        /* starting with Sunday */
        days: 'Восскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
        daysShort: 'Вос_Пн_Вт_Ср_Чт_Пт_Суб'.split('_'),
        months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
        monthsShort: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Нояб_Дек'.split('_'),
        firstDayOfWeek: 1
      }

    }
  },
  directives: {
    mask: VueMaskDirective,
  },
  methods: {
      options (date) {
        
      return date >= moment().format("YYYY/MM/DD") 
    },
  },
  
  watch: {
    innerValue: {
      handler(value){
        this.$emit('update:valuedate', value);
      }
    },
    
  }
}
</script>
