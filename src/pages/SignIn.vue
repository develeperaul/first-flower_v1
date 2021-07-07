<template>
  
    <ZeroComp text="Войдите, чтобы увидеть профиль" textBtn="Войти" :to="{name: 'auth'}"/>
  
</template>

<script>
import ZeroComp from "components/ZeroComp"
export default {
  // name: 'PageName',
  components: {
    ZeroComp
  }
}
</script>
