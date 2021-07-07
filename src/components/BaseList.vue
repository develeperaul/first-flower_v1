<template>
  <div >
    
    <BaseItem  v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
// class="tw-grid tw-grid-rows-3 tw-grid-flow-col tw-gap-4"
export default {
  name: "List",
  props: {
    cards: {
      type: Array,
      requared: true,
    },
  },
};
</script>
