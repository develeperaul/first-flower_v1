<template>
  <Input rules="required" v-model="innerValue" label="Время" placeholder=" 10:00 - 12:00 " v-mask="mask"/>
  
  
</template>

<script>
import { VueMaskDirective } from 'v-mask';
export default {
  // name: 'ComponentName',
  props: {
    valuetime: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      innerValue: '',
      
      mask:[/[0-1]/,/[0-9]/ ,':', /[0-5]/,/[0-9]/, '-' , /[0-1]/,/[0-9]/, ':' , /[0-5]/,/[0-9]/]
    }
  },
  directives: {
    mask: VueMaskDirective,
  },
  watch: {
    innerValue: {
      handler(value){
        this.$emit('update:valuetime', value)
      },


    }
    // innerValue(value){
    //   //HH:MM
      
    //   this.$emit('udpate:valuetime', this.innerValue)
    // }
  }
}
</script>
