<template>
  <Input
    v-model="innerValue"
    rules="required|length:17"
    type="tel"
    label="Телефон"
    placeholder="8 (9__) ___-__-__"
    v-mask="'8 (###) ### ## ##'" />
</template>

<script>

import { VueMaskDirective } from 'v-mask';
export default {
  props: {
    raw: {
      default: '',
      type: String,
    }
  },
  
  // name: 'ComponentName',
  data () {
    return {
      innerValue: ''
    }
  },
  directives: {
    mask: VueMaskDirective,
  },
    created() {
    
    if (this.value) {
      
      this.innerValue = this.value;
      

    }
  },
  watch: {
      innerValue: {
      handler(value) {
        console.log(value)
        if (value.length <= 0) return this.$emit('update:raw', value);
        const clean = `${value.replace(/[^\d]/gi, '')}`;
        this.$emit('update:raw', clean);
      },
      immediate: true,
    },
    value(newVal) {
      console.log(newVal)
      if (newVal !== this.innerValue) {
        this.innerValue = newVal;
      }
    },
  }
}
</script>
