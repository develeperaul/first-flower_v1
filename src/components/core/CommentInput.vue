<template>
<div class="tw-relative">
  <Input
    v-model="innerValue"
    :maxlength="maxlength"
    type="text"
    :label="placeholder"
    :placeholder="placeholder" />
  <span class="symbol">{{valuecomment.length}}/{{maxlength}}</span>
</div>
  
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    valuecomment:{
      default: '',
      type: String
    },
    placeholder: {
      default: 'Комментарий',
      type: String
    }
  },
  data () {
    return {
      innerValue: '',
      maxlength: '200'
    }
  },
  watch: {
    innerValue: {
      handler(value){
        this.$emit('update:valuecomment', value);
      }
    },
  }
}
</script>
<style scoped>
  .symbol{
    color: #C6C6C6C6;
    font-weight: 500;
    font-size: 10px;
    position: absolute;
    bottom: 0;
    right: 6px;
  }
</style>
