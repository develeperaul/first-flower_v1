<template>
  <div class="tw-relative">
    <input 
      type='range'
      name='slide'
      
      :value = "value"
      ref="input"
      @input="onChange"
      step='1'
      :min='min'
      :max='max'
    >
    <div>
      <span
      class="tw-absolute count tw-top-6 tw-font-medium"
      ref="count"
    >
      {{value}}
    </span>
    <span class="tw-absolute tw-right-0 tw-top-6 tw-font-medium maxcount" >
      {{max}}
    </span>
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    valueSlider:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: 15,
      min: 15,
      max: 201,
    }
  },
  methods:{
    onChange(e){
      this.value = e.target.value
      this.$refs.count.style.left = `calc(100%/${this.max}*${this.value-this.min})`
      //при увеличении экрана начиная с 410px смещение влево РЕШИТЬ
    }
  },
  mounted(){
    this.$refs.count.style.left = `calc(100%/${this.max}*${this.value-this.min})`
  },
  watch:{
    value: {
      handler(val){
        
        this.$emit('update:valueSlider', val)
      }
    }
  }
  
}
</script>
<style scoped lang="scss">
   input[type=range] {
    position:relative;
    -webkit-appearance: none;
    width: 100%;
     &::-webkit-slider-runnable-track {
      height: 2px;
      background: #f3f3f3;
       border-bottom: 5px solid #EFEFEF;
       &:before {
         content: '';
         background: white;
         width: 2px;
         height: 15px;
         position: absolute;
         top: -7px;
         border-left: 1px solid #2980b9;
       }
              &:after {
         content: '';
         background: white;
         width: 2px;
         height: 15px;
         position: absolute;
         top: -7px;
         right: 0;
         border-right: 1px solid #2980b9;
       }
    }
    &::-webkit-slider-thumb{
      -webkit-appearance: none;
      border: 3px solid #CE406A;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: white;
      cursor: pointer;
      margin-top: -9px;
      position: relative;
      z-index: 1;
    }
    &:focus {
      outline: none;
    }
  
  }
  .maxcount {
    color: #EFEFEFEF;
  }
</style>