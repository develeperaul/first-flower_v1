<template>
  <ValidationProvider
    class="tw-relative tw-appearance-none tw-w-full BaseInput tw-mb-4"
    tag="div"
    v-bind="{ rules, vid}"
    :name="name || label"
    v-slot="{ errors, ariaInput, ariaMsg }"
  >
    <input
      
      :class="{ 'tw-border-input': !errors[0], 'tw-border-secondary': errors[0], 'has-value': hasValue, 'has-placeholder': hasBlur }"
      class="tw-w-full tw-py-3 tw-px-4 tw-leading-normal tw-bg-transparent tw-border"
      :id="name"
      :type="type"
      :maxlength="maxlength"
      :placeholder="valuePlaceholder"
      ref="input"
      v-model="innerValue"
      v-bind="ariaInput"
      @blur="onBlur"
      @focus="onFocus"
      
    >
    <label
      class="tw-absolute tw-block tw-bottom-1/2 tw-transform tw-translate-y-1/2 tw-w-full tw-px-4  tw-leading-normal"
      @click="$refs.input.focus()"
      :for="name"
      ref="label"
      :class="{ 'tw-text-border-input ': !errors[0], 'tw-text-secondary': errors[0] }">
      <span class="tw-font-medium">{{ label || name }}</span>
      
    </label>
    <template>
      <slot></slot>
    </template>
    
    <!-- <span
      class="tw-block tw-text-secondary tw-text-xs tw-absolute tw-bottom-0 tw-left-0"
      v-bind="ariaMsg"
      v-if="errors[0]"
    >{{ errors[0] }}</span> -->
    
  </ValidationProvider>
</template>

<script>


export default {
  name: "BaseInput",

  props: {
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "написано"
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return [
          "url",
          "text",
          "password",
          "tel",
          "search",
          "number",
          "date"
        ].includes(value);
      }
    },
    value: {
      type: null,
      default: ""
    },
    maxlength: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    innerValue: "",
    hasBlur: false,
    valuePlaceholder: null
  }),
  methods: {
    onBlur(){
      if(!this.hasValue){

        this.hasBlur = true
      }
      
    },
    onFocus(){
      if(!this.hasValue){
        this.valuePlaceholder = this.placeholder
        this.$refs.input.placeholder  = this.valuePlaceholder
      }
      
    }
  },
  computed: {
    hasValue() {
      return !!this.innerValue;
    },
    
    
  },
  watch: {
    innerValue(value) {
      
      this.$emit("input", value);
    },
    value(val) {
      
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
    
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
    
  },
  mounted(){
    this.$refs.input.placeholder = null
  },
  
};
</script>

<style lang="scss" scoped>
.BaseInput {
  
  input {
    position: relative;
    z-index: 99999;
    border-radius: 3px;
    transition: border-color .4s ease-in-out;
    z-index: 0;
    &.has-value,
    &:focus {
      outline: none;
    }
  }

  input::-webkit-calendar-picker-indicator {
    display: none
  }
  

  label {
    & span{
      padding: 0 0px;
    }
    
    user-select: none;
    font-size: 1rem;
  }

  input:focus {
    border-color:#272727;

  }
  input.has-placeholder ~ label,
  input.has-value ~ label,
  input:focus ~ label {
    transition: all .4s ease-in-out;
    // bottom: 100%;
    transform: translateY(-60%);
    
    & span { 
      transition: all .6s ease-in-out;
      font-size: 0.625rem;
      color: #272727;
      // background: hsla(100%,100%,100%, 100%);
      z-index: 1;
      // background: red;
      padding: 0 4px;
      
      
    }
  }
}
</style>