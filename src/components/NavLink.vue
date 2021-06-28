<template>
<div>
  <router-link
    :to="{ name: name }"
    custom
    v-slot="{href, isActive, navigate}"
    active-class="active"
  >
    <a class="tw-flex tw-flex-col tw-items-center " :active="isActive" :href="href" @click="navigate"
      >
      <Icon :name="name" :active="isActive" />
      <span class="tw-text-xs" :class="[{ active: isActive }, { textColor: !isActive }]">
        {{ itemName }}
      </span></a
    >
  </router-link>
  
</div>
  
</template>

<script>
const navList = [
  { home: "Главная" },
  { favorite: "Избранные" },
  { basket: "Корзина" },
  { sale: "Акции" },
  { profile: "Профиль" },
];
export default {
  

  props: {
    name: {
      type: String,
      required: true,
    },  
    color: {
      type: String,
      required: false,
    },
  },

  computed: {
    itemKey() {
      const name = navList.find((item) => Object.keys(item) == this.name);
      
      return Object.keys(name).join("");
    },
    itemName() {
      
      const name = navList.find((item) => Object.keys(item) == this.name);
      
      return Object.values(name).join("");
    },
  },
  name: 'NavLink',

};
</script>
<style lang="scss" scoped>
.span {
  color: #222222
}
.active {
  color: #222222;
}
.textColor {
  color: #838383;
}
</style>
