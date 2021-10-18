<template>
  <q-layout view="hHh lpr fFf" style="min-height: 100vh">
    <div>

    <q-header reveal class="bg-white" >
      <div ref="header">

      <q-toolbar class="tw-relative tw-mb-2 env-t">
        <q-btn
          color="primary"
          flat
          round
          dense
          icon="menu"
          @click="toggleMenu"
          class="tw-absolute"
          
        />
        <div class="logo tw-m-auto tw-pt-2" @click="onLogo" >
          <img src="firstFlower.svg" alt="логитип" />
        </div>
      </q-toolbar>
      <BorderLine />
    </div>
    </q-header>
    </div>

    <q-footer v-if="openCardProduct" class="bg-white" >
      <div ref="footer">

        <BorderLine />

        <q-toolbar class="env-b" @click="link" >
          <div class="tw-py-3 flex justify-between tw-w-full">
            <NavLink name="home" :exact="true" />
            <NavLink name="favorite" />

            <NavLink name="basket" class="tw-relative">
              <span
                v-if="basketCount"
                class="
                  tw-text-xs
                  tw-text-center
                  tw-absolute
                  tw-rounded-full
                  tw-right-0
                  tw--top-2
                  tw-transform
                "
                style="
                  min-width: 20px;
                  padding: 3px 3.5px;
                  background-color: #ef1717;
                "
                >{{ basketCount }}</span
              >
            </NavLink>

            <NavLink name="sale" />
            <NavLink name="profile" />
          </div>
        </q-toolbar>
      </div>
    </q-footer>

    <q-drawer
      v-model="menu"
      :breakpoint="700"
      bordered
      overlay
      behavior="desktop"
      :width="width"
      :mini-width="300"
      content-class="gradient-green tw-pt-6
        tw-flex tw-flex-col tw-justify-between
        "
      ref="drawer"
    >
      <div >
        <div v-if="!title" class="tw-text-center tw-mb-3.5 tw-pl-4">
          <span class="tw-font-semibold">Категории</span>
        </div>
        <div v-else class="tw-text-center tw-mb-3.5 tw-relative p-content">
          <q-icon
            @click="getParent"
            name="arrow_back_ios"
            class="
              tw-absolute
              tw-left-0
              tw-top-1/2
              tw-transform
              tw--translate-y-1/2
              tw-pl-7
            "
          ></q-icon>
          <span class="tw-font-semibold">{{ title }}</span>
        </div>
        <div
          v-for="(item, index) in list"
          :key="index"
          @click="getChildren(item)"
        >
          <div
            class="
              tw-flex tw-justify-between tw-items-center
              p-content
              tw-py-5 tw-ml-4
            "
          >
            <span class="tw-font-medium">{{ item.name }}</span>
            <q-icon v-if="!title" name="arrow_forward_ios" class="" />
          </div>

          <BorderLine v-if="index + 1 !== list.length" />
        </div>
      </div>
      <div class="tw-flex tw-flex-col p-content tw-mt-3 tw-mb-12 tw-mx-4">
        <span class="tw-font-semibold tw-text-lg" style="margin-bottom: 16px">
          Контакты магазина
        </span>
        <span style="margin-bottom: 16px">
          <a
            href="tel:+79178000907"
            class="tw-font-medium tw-pt-3.5 tw-flex"
            style="display: inline"
          >
            <Icon name="phone" class="tw-mr-3" style="display: inline" />
            тел. 89178000907
          </a>
          <a href="https://wa.me/79178000907" style="display: inline">
            (WhatsApp) цветы
          </a>
        </span>
        <span style="margin-bottom: 16px">
          <a
            href="tel:+79177818939"
            class="tw-font-medium tw-pt-3.5 tw-flex"
            style="display: inline"
          >
            <Icon name="phone" class="tw-mr-3" style="display: inline" />
            тел. 89177818939
          </a>
          <a href="https://wa.me/79177818939" style="display: inline">
            (WhatsApp) шары
          </a>
        </span>
        <a
          href="https://goo.gl/maps/XjYFnUJRMnuUPQ9R7"
          class="tw-font-medium tw-pt-3.5 tw-flex"
          style="margin-bottom: 16px"
        >
          <Icon name="location" class="tw-mr-3" />
          Чишмы, пр. Дружбы 1/1 (8:00 – 21:00);
        </a> 
        <a
          href="https://goo.gl/maps/CNV3YUJATWpASB446"
          class="tw-font-medium tw-flex"
          style="margin-bottom: 0px"
        >
          <Icon name="location" class="tw-mr-3" />
          Чишмы, ул. Шоссейная 29 (9:00 – 21:00).
        </a>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view style="padding-top: 10px" />
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapGetters } from 'vuex';

import NavLink from 'components/NavLink';
import BaseListDrawer from 'components/BaseListDrawer';
import Cards from 'components/Cards';

import { QSpinnerPuff } from 'quasar';

export default {
  // name: 'LayoutName',
  components: {
    BaseListDrawer,
    NavLink,
    Cards,
  },
  data() {
    return {
      list: null,
      title: null,

      cards: false,

      // leftDrawerOpen: this.menu,

      titleButton: false,
      listButton: true,
      cards: false,
      width: 0,
      mt: 0,
      mb: 0
    };
  },
  methods: {
    showLoader() {
      this.$q.loading.show({
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      });
    },
    async getHomeList() {
      this.showLoader();
      await this.$store.dispatch('cards/actionHomeList');
    },

    toggleMenu() {
      this.$store.commit('categories/clickMenu');
    },
    async getSectionList() {
      this.showLoader();
      await this.$store.dispatch('categories/getSections');
      this.list = this.sections;
    },
    link() {
      if (this.menu) {
        this.toggleMenu();
      }
    },

    onLogo() {
      if (this.menu) {
        this.toggleMenu();
      }
      this.$router.push({ name: 'home' });
    },

    updateWidth() {
      this.width = window.innerWidth;
    },
    updateMargin(){
      // this.mt = this.$refs.header.offsetHeight;
      // this.mb = this.$refs.footer.offsetHeight;

      // this.$refs.drawer.$refs.content.style.marginTop = `${this.mt}px`
      // this.$refs.drawer.$refs.content.style.marginBottom = `${this.mb}px`
    },
    async getChildren(item) {
      if (this.title === null && item.UF_HASCHILD) {
        await this.$store.dispatch('categories/getSubSectionList', item.id);
        this.title = item.name;
        this.list = this.subSection;
      } else {
        this.$store.commit('categories/clickMenu');
        this.$router.push({
          name: 'cards',
          params: { id: item.id, item: item },
        });
      }
    },
    getParent() {
      this.list = this.sections;
      this.title = null;
    },
  },

  computed: {
    ...mapGetters('categories', ['sections', 'subSection', 'menu']),
    openCardProduct() {
      if (this.$route.name === 'cardproduct') return false;
      else return true;
    },
    basketCount() {
      const count = this.$store.state.basket.products.length;
      if (count === 0) return false;
      else return count;
    },
  },

  created() {
    

    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();

    this.getSectionList().then(() => {
      this.$q.loading.hide();
    });
    this.getHomeList().then(() => {
      this.$q.loading.hide();
    });
    
    
  },
  mounted(){
    this.updateMargin();
  }
};
</script>

<style scoped lang="scss">
.active {
  color: red;
}
.gradient-green {
  background: linear-gradient(188.96deg, #ddece5 30.4%, #aec4ba 80.38%);
}
</style>
