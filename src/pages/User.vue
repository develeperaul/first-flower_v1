<template>
  <div>
    <div class="p-content tw-flex tw-flex-col" >
      <span>
        {{getPhone}}    
      </span>
      <span
        class="tw-font-semibold tw-text-secondary tw-mt-4"
       @click="outProfile">
        выйти
      </span>
    </div>
    <ZeroComp text="Вы еще ничего не заказывали" textBtn="Перейти в каталог " :to="{name: 'home'}"/>
  </div>
  
</template>

<script>
import ZeroComp from 'components/ZeroComp'
import {mapGetters} from 'vuex';
export default {
  components:{
    ZeroComp
  },
  methods: {
    outProfile(){
      this.$store.dispatch("auth/outProfile")
      this.$router.push({name: 'signin'})
    }
  },
  computed:{
    ...mapGetters('auth', {
      user: 'getUser'
    } ),
    getPhone(){
      console.log(this.user)
      if(this.user === null){
        return this.user
      } else{
        return `+7 ${this.user.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1) $2 $3 $4")}`   
      }
      
    }
  }
  // name: 'PageName',
}
</script>
