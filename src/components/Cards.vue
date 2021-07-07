<template>
    <div>
      <BaseList :cards="cards" class="tw-grid tw-grid-cols-2 tw-gap-4"/>
    
    </div>
    
  
</template>

<script>
import { mapGetters } from "vuex";
import BaseList from "components/BaseList.vue";
export default {
  // name: 'ComponentName',
  props: {
    name: {
      type: String,
      required: true,
      
    }
  },
  components: {
    BaseList
  },
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters("cards", ["cards"]),

  },
  created(){
    
    
    this.$store.dispatch("cards/cardList", this.name)
  }
}
</script>
