export default {
  props: {
    value: {
      required: true,
      type: String,
    },
  },
  created() {
    
    if (this.value) {
      
      this.innerValue = this.value;
      

    }
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal);
    },
    value(newVal) {
      if (newVal !== this.innerValue) {
        this.innerValue = newVal;
      }
    },
  },
  data() {
    return {
      innerValue: '',
    };
  },
};