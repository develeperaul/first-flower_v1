<template>
  <q-btn-group
    class="btn-color flex items-center w-28 min-w-min h-10"
    unelevated
    spread
    rounded
    
  >
    <q-btn size="5px" class=" decrement" round @click="incrementCount('decrement')" 
      style="
   
      "
    >
      <q-icon name="remove"></q-icon>
    </q-btn>
    <span class="tw-font-medium count">{{ count }}</span>

    <q-btn size="5px" class="increment"  @click="incrementCount('increment')" >
      <q-icon name="add"></q-icon>
    </q-btn>
  </q-btn-group>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: this.count,
    };
  },
  methods: {
    incrementCount(value) {
      this.$emit("incrementCount", value);
    },
  },

  // name: 'ComponentName',

};
</script>
<style lang="scss" scoped>
  .decrement{
            padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 12px;
        
  }
  .count{
    padding-top: 0.625rem/* 10px */;
    padding-bottom: 0.75rem/* 12px */;
    padding-left: 0.75rem/* 12px */;
    padding-right: 0.75rem/* 12px */;
    
  }
  .increment {
    padding-right: 0.625rem/* 10px */;
    padding-top: 0.625rem/* 10px */;
    padding-bottom: 0.75rem/* 12px */;
    
    }

  @media (min-width: 300px) and (max-width: 400px) { 
      .decrement{
            padding-left: 2px;
            padding-top: 8px;
            padding-bottom: 8px;
          }

           .increment {
        padding-right: 2px/* 6px */;
          padding-bottom: 8px/* 8px */;

          padding-top: 8px/* 6px */;
           }

                 .count {
          padding-top: 0.375rem/* 6px */;
          padding-bottom: 0.5rem/* 8px */;
          padding-left: 0.375rem/* 6px */;
          padding-right: 0.375rem/* 6px */
        }
  }
  
</style>
